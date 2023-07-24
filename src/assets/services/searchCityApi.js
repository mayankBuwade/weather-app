import axios from "axios";

export const getCityDetails = async (city) => {
  try {
    const response = await axios.request({
      method: "GET",
      url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
      params: {
        namePrefix: city,
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_CITY_SEARCH_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_RAPID_HOST,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
