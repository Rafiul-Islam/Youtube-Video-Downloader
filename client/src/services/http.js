import axios from "axios";

axios.defaults.withCredentials = true;
const http = axios.create({
  baseURL: "https://youtube-video-downloader-application-api.vercel.app",
});

export default http;
