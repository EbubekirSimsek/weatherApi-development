import axios from "axios";

/**
 * Here we make our API GET request for the weather today.
 */
export async function getTodayWeather(url) {
  return await axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    // Error handling
    .catch((error) => {
      throw error;
    });
}
