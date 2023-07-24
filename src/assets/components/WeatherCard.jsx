import { Box, Card, Typography } from "@mui/material";

const WeatherCard = ({ weatherData }) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return (
    <Box
      style={{
        width: "100%",
        display: "flex",

        justifyContent: "center",
        alignItems: "center",
        marginTop: "5rem",
        marginBottom: "2rem",
      }}
    >
      {Object.keys(weatherData).length ? (
        <Card
          style={{
            display: "flex",
            position: "relative",
            flexDirection: "column",
            maxHeight: "360px",
            width: "50%",
          }}
        >
          <Box
            style={{
              minWidth: "50%",
              padding: "2rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h2">{weatherData.cityName}</Typography>
              <Typography
                style={{
                  marginTop: "1rem",
                  fontSize: "1.1rem",
                }}
              >
                {formattedDate}
              </Typography>
            </Box>
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Box>
                <Typography
                  variant="h1"
                  as="span"
                  style={{ marginRight: "1rem" }}
                >
                  {(weatherData.currTemp - 273.15).toFixed(0)}
                </Typography>
                <Typography
                  variant="h5"
                  as="span"
                  style={{
                    position: "relative",
                    right: "10px",
                    bottom: "50px",
                    fontWeight: "bold",
                  }}
                >
                  o
                </Typography>
                <Typography variant="h1" as="span">
                  C
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* <img
                  src={`http://openweathermap.org/img/w/${weatherData.weather.icon}.png`}
                  alt="weather-image"
                  width="60px"
                  height="60px"
                /> */}
                <i className={`owi owi-4x owi-${weatherData.weather.icon}`}></i>
                <Typography>{weatherData.weather.main}</Typography>
              </Box>
            </Box>
          </Box>
        </Card>
      ) : (
        <Typography>No data available</Typography>
      )}
    </Box>
  );
};

export default WeatherCard;
