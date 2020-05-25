import express from "express";
import path from "path";
import cors from "cors";
import fs from "fs";
import csv from "csv-parser";

import clustering from "density-clustering";

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
let cal_l = [];

app.get("/getDT", (req, res) => {
  fs.createReadStream("NHC.csv")
    .pipe(csv())
    .on("data", (row) => {
      let temp = {
        이완기혈압: row["이완기혈압"],
        수축기혈압: row["수축기혈압"],
      };
      list.push(temp);

      let cal_temp = [];

      cal_temp.push(Number(row["수축기혈압"]));
      cal_temp.push(Number(row["이완기혈압"]));

      cal_l.push(cal_temp);
    })
    .on("end", () => {
      console.log("CSV file successfully processed");

      let kmeans = new clustering.KMEANS();
      let clusters = kmeans.run(cal_l, 3);

      let resultData = [];

      for (let i = 0; i < clusters.length; i++) {
        let result = [];
        for (let j = 0; j < clusters[i].length; j++) {
          result.push(cal_l[clusters[i][j]]);
        }
        resultData.push(result);
      }
      console.log(resultData);
      list = [];
      cal_l = [];

      return res.json(resultData);
    });
});

app.listen(port, () => {
  console.log("\x1b[35m", "Api server is running at", port);
});
