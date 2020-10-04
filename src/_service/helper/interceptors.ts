import axios from "axios";

/**
 * Intercept all axios request.
 */
axios.interceptors.request.use(
  function(config) {
    // Set headers
    config.headers = {
      ...config.headers,
      "Content-Type": "application/json",
    };
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);


/**
 * Intercept all axios response.
 */
axios.interceptors.response.use();


export default axios;
