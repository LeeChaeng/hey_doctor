import express from "express";
import path from "path";
import cors from "cors";
import fs from "fs";
import csv from "csv-parser";
import connection from "./lib/sql";

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

app.get("/getDBDT", (req, res) => {
  connection.query("select * from nhc", (err, rows) => {
    if (err) throw err;
    let p_learn = [];

    for (let i = 0; i < rows.length; i++) {
      let p_learn_temp = [];

      p_learn_temp.push(rows[i]["bp_high"]);
      p_learn_temp.push(rows[i]["bp_lwst"]);
      p_learn.push(p_learn_temp);
    }

    let kmeans = new clustering.KMEANS();
    let clusters = kmeans.run(p_learn, 3);

    let resultData = [];

    for (let i = 0; i < clusters.length; i++) {
      let result = [];
      for (let j = 0; j < clusters[i].length; j++) {
        result.push(p_learn[clusters[i][j]]);
      }
      resultData.push(result);
    }
    p_learn = [];

    return res.json(resultData);
  });
});

const start_s = () => {
  let sql =
    "insert into nhc (bp_high, bp_lwst, age_group, bmi, blds, tot_chole, sgot_ast, sgpt_alt) values (?,?,?,?,?,?,?,?)";

  fs.createReadStream("NHC.csv")
    .pipe(csv())
    .on("data", (row) => {
      let value = [];
      value.push(row["수축기혈압"]);
      value.push(row["이완기혈압"]);
      value.push(row["연령대코드(5세단위)"]);
      let bmi =
        row["체중(5Kg단위)"] /
        ((row["신장(5Cm단위)"] / 100) * (row["신장(5Cm단위)"] / 100));
      value.push(bmi.toFixed(2));
      value.push(row["식전혈당(공복혈당)"]);
      value.push(row["총콜레스테롤"]);
      value.push(row["(혈청지오티)AST"]);
      value.push(row["(혈청지오티)ALT"]);

      connection.query(sql, value, (err, rows, result) => {
        if (err) throw err;
      });
    })
    .on("end", () => {
      console.log("upload Data completed!");
    });
};

start_s();

app.listen(port, () => {
  console.log("\x1b[35m", "Api server is running at", port);
});
