import axios from "axios";

const http = axios.create({
  baseURL: "https://youtube-video-downloader-application-api.vercel.app",
});

export default http;
