import axios from "axios";

axios.defaults.withCredentials = true;
const http = axios.create({
  baseURL: "https://youtube-video-downloader-application-api.vercel.app",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  },
});

export default http;
