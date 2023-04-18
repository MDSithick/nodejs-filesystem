const express = require("express");
const path = require("path");
const fs = require("fs");

//path
const dirPath = path.join(__dirname, "timestamps");

//initializing express server
const app = express();

//middlewars
app.use(express.static("timestamps"));


//api's
app.get("/", (req, res) => {
  res.send("Hey I'm Working Good");
});

app.get("/static", (req, res) => {
  const time = new Date();
  const dateString = time.toUTCString().slice(0, -4);

  //content
  const timeStamp = `Last created timeStamp : ${dateString}`;

  fs.writeFileSync(`${dirPath}/date-time.txt`, timeStamp, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file created");
    }
  });
  res.sendFile(path.join(__dirname, "timestamps/date-time.txt"));
});

//set server to listen under port:7000
app.listen(7000, () => console.log(`server started in localhsot:7000`));


