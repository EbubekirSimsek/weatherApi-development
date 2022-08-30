import axios from "axios";

/**
 * The API get request function
 * @param {*} url The api url
 * @returns Promise object with JSON Data when resolved.
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
