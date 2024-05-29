const express = require("express");
const ytdl = require("ytdl-core");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: ["https://youtube-video-downloader-application-api.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.post("/download", async (req, res) => {
  const url = req.body.url;
  if (!url || !url.toString().includes("https://www.youtube.com/watch?")) {
    return res.status(400).send({ "message:": "Invalid URL." });
  }

  const metaInfo = await ytdl.getInfo(url);
  let data = {
    title: metaInfo.videoDetails.title,
    info: metaInfo.formats,
  };
  return res.send(data);
});

app.listen(4000, () => {
  console.log("Sever is running on port 4000");
});
