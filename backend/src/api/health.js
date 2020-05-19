import express from "express";
import fs from "fs";

const router = express();

router.get("/getDT", (req, res) => {
  let data = fs.readFile("../../NHIS_OPEN_GJ_2018.csv", "utf8", (err, data) => {
    let dataArray = data.split(/\r?\n/);
    console.log(dataArray);
  });
});

export default router;
