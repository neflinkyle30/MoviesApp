import axios from "axios";
import {toast} from "react-toastify";

const moviesService = axios.create({
    baseURL: import.meta.env.VITE_API_SERVICE,
});


moviesService.interceptors.response.use(
    response => response,
    error => {

        if (!error.response) {
            console.log("Error: Network Error");
        } else {
          if (error.response.status === 403) toast.error("You are not authorized to perform this action");
          else if (error.response.status === 404) toast.error("Service not found 404");
          else if (error.response.status === 400) toast.error(error.response.data);
          else if (!error.response || !error.response.data) toast.error("An unexpected error occurred. If the error persists, refresh the page");

        }
        return Promise.reject(error);
    },
);

export default moviesService;