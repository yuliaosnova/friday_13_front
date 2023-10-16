import axios from "axios";

const axiosBaseUrl= "https://friday-13.vercel.app/api";

axios.defaults.baseURL = axiosBaseUrl; 

export default axios;