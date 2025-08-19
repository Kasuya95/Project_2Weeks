const express = require("express");

const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const sneakerRouter = require("./routers/sneaker.router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1", sneakerRouter);

app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});
