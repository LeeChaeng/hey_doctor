import express from "express";
import path from "path";
import cors from "cors";
import fs from "fs";
import csv from "csv-parser";

const app = express();
const port = 4000;

//서버 오류시 캐치 500 error
app.use((err, req, res, next) => {
  console.log(err.stack);
  return res.status(500).json({ code: 0 });
});

app.use(cors("http://localhost:3000"));

app.use(
  express.static(path.resolve(__dirname, "..", "..", " frontend", "public"))
);

app.get("/", (req, res) => {
  res.json({ Hello: "World" });
  return res;
});

let list = [];

app.get("/getDT", (req, res) => {
  fs.createReadStream("NHC.csv")
    .pipe(csv())
    .on("data", (row) => {
      list.push(row);
    })
    .on("end", () => {
      console.log(list[0]["이완기혈압"]);
      console.log("CSV file successfully processed");

      console.log(res);
      return res.json(list);
    });
});

app.listen(port, () => {
  console.log("\x1b[35m", "Api server is running at", port);
});
