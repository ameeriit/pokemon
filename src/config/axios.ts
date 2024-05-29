import axios from "axios";

// use this env for baseurl
// baseUrl: 'process.env.API_BASE_URL'

export const apiClient = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

// Add a response interceptor for handling errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("Error:", error.response.data);
      console.error("Status:", error.response.status);
    } else if (error.request) {
      console.error("Error:", error.request);
    } else {
      console.error("Error:", error.message);
    }
    // You can return a rejected promise with a message to indicate what went wrong
    return Promise.reject(error);
  }
);
