const ffmpegStatic = require("ffmpeg-static");
const ffmpeg = require("fluent-ffmpeg");

// Tell fluent-ffmpeg where it can find FFmpeg
ffmpeg.setFfmpegPath(ffmpegStatic);

const outputFilePath = "s1.mp4";
const startTime = "00:00:00";
const endTime = "00:00:15";

// Run FFmpeg
ffmpeg()
  // Input file
  .input("output1.mp4")

  // Audio bit rate
  .setStartTime(startTime)
  .setDuration(endTime)
  .outputOptions("-c", "copy")
  .output(outputFilePath)
  .on("end", () => {
    console.log("Cắt âm thanh thành công!");
  })
  .on("error", (err) => {
    console.error("Lỗi khi cắt âm thanh:", err);
  })
  .run();
