import axios from "axios";

const http = axios.create({
  baseURL: "https://youtube-video-downloader-application-5aakn8mha.vercel.app/",
});

export default http;
