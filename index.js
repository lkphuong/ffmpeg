const ffmpegStatic = require("ffmpeg-static");
const ffmpeg = require("fluent-ffmpeg");

const fs = require("fs");

// Tell fluent-ffmpeg where it can find FFmpeg
ffmpeg.setFfmpegPath(ffmpegStatic);

for (let i = 1; i <= 1000; i++) {
  const imageFilePath = `inputs/${i}.jpg`;
  const audioFilePath = `inputs/${i}.mp3`;
  const outputFilePath = `outputs/output${i}.mp4`;
  const watermarkFilePath = "inputs/watermark.png";
  const videoDuration = 15;

  if (fs.existsSync(imageFilePath)) {
    ffmpeg()
      .input(imageFilePath)
      .input(audioFilePath)
      .outputOptions("-c:v", "libx264")
      .outputOptions("-c:a", "aac")
      .outputOptions("-strict", "experimental")
      .outputOptions("-b:a", "192k")
      .outputOptions("-loop 1")
      .outputOptions("-c:a copy")
      .outputOptions(
        "-vf",
        `movie=${watermarkFilePath} [watermark]; [watermark]scale=500x500 [watermark2]; [in][watermark2] overlay=10:20 [out]`
      )
      .outputOptions("-t", `${videoDuration}`)
      .output(outputFilePath)
      .on("end", () => {
        console.log(`Tạo video thành công ${i}!`);
      })
      .on("error", (err) => {
        console.error(`Lỗi khi tạo video ${i}:`, err);
      })
      .run();
  } else {
    console.log(`Không tìm thấy hình ảnh ${i}`);
  }
}
