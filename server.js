const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();
const fs = require("fs");
const ffmpeg = require("fluent-ffmpeg");
app.use(cors());

ffmpeg.setFfmpegPath("/Users/simon/Downloads/ffmpeg");
ffmpeg.setFfprobePath("/Users/simon/Downloads/ffmpeg");

app.listen(4000, () => {
	console.log("Server Listens at port 4000");
});

app.get("/reverse", (req, res) => {
	console.log("request..");
	var URL = req.query.URL;
	var JID = req.query.JID;
	const stream = ytdl(URL, {
		quality: "highestaudio",
	});
	ffmpeg(stream)
		.outputOptions(["-af areverse"])
		.save("cdn/" + JID + ".mp3")
		.on("end", () => {
			console.log(JID + " has been saved!");
		});
	// res.redirect("https://soundreverser.netlify.app/redirect/?jobid=" + JID);
	res.redirect("http://127.0.0.1:5500/redirect/?jobid=" + JID);
	var resultHandler = function (err) {
		if (err) {
			console.log("unlink failed", err);
		} else {
			console.log("file deleted");
		}
	};
	setTimeout(() => {
		fs.unlink("cdn/" + JID + ".mp3", resultHandler);
	}, 3600000);
	// 3600000
});
