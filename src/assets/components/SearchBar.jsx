import { useEffect, useState } from "react";
import { Autocomplete, Box, Button, Stack, TextField } from "@mui/material";
import { getCityDetails } from "../services/searchCityApi";
import { fetchWeatherData } from "../services/weatherApi";

const SearchBar = ({ setWeatherData }) => {
  const [text, setText] = useState("");
  const [cityData, setCityData] = useState([]);
  const [newInputValue, setNewInputValue] = useState("");

  useEffect(() => {
    const delaySearch = setTimeout(async () => {
      if (text) {
        let cities = await getCityDetails(text);
        if (cities) {
          setCityData(cities);
        }
      }
    }, 450);

    return () => clearTimeout(delaySearch);
  }, [text]);

  useEffect(() => {
    const delayWeatherSearch = setTimeout(async () => {
      if (Object.keys(newInputValue).length) {
        let weatherData = await fetchWeatherData(
          newInputValue.latitude,
          newInputValue.longitude
        );
        console.log(weatherData);
        setWeatherData({
          cityName: newInputValue.city,
          currTemp: weatherData.main.temp,
          feelsLike: weatherData.main.feels_like,
          weather: weatherData.weather[0],
        });
      }
    }, 450);

    return () => clearTimeout(delayWeatherSearch);
  }, [newInputValue]);

  return (
    <Box
      style={{
        marginTop: "3rem",
        display: "flex",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        height: "4rem",
        width: "100%",
      }}
    >
      <Stack style={{ height: "3rem", width: "50%" }}>
        <Autocomplete
          value={newInputValue}
          onChange={(event, newValue) => {
            setNewInputValue(newValue);
          }}
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={cityData.map((option) => {
            return {
              city: option.city,
              id: option.id,
              longitude: option.longitude,
              latitude: option.latitude,
            };
          })}
          getOptionLabel={(option) => option.city || ""}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option.id}>
                {option.city}
              </li>
            );
          }}
          inputValue={text}
          onInputChange={(event, newInputValue) => setText(newInputValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter city name"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Stack>
    </Box>
  );
};

export default SearchBar;
