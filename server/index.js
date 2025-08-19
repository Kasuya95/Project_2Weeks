const express = require("express");

const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const sneakerRouter = require("./routers/sneaker.router");

app.use(
  cors({
    // origin ต้นทางมาจากไหนได้บ้าง
    origin: ["http://localhost:5173", "127.0.0.1:5173"],
    // อุญาติให้ ใช้ method ไรบ้าง หรือ service
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "x-access-token"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1", sneakerRouter);

app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});
