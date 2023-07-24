import { useState } from "react";
import { Container } from "@mui/material";
import SearchBar from "./assets/components/SearchBar";
import WeatherCard from "./assets/components/WeatherCard";

function App() {
  const [weatherData, setWeatherData] = useState({});
  return (
    <Container
      style={{
        background: "#e3f2fd",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      maxWidth="xl"
    >
      <SearchBar setWeatherData={setWeatherData} />
      <WeatherCard weatherData={weatherData} />
    </Container>
  );
}

export default App;
