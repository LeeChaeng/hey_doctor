import express from "express";
import path from "path";

const app = express();
const port = 8080;

//서버 오류시 캐치 500 error
app.use((err, req, res, next) => {
  console.log(err.stack);
  return res.status(500).json({ code: 0 });
});

app.use(
  express.static(path.resolve(__dirname, "..", "..", " frontend", "public"))
);

app.listen(port, () => {
  console.log("\x1b[35m", "Api server is running at", port);
});
