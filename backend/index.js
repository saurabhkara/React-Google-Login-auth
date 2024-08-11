import express from "express";
import cors from "cors";
import env from "dotenv";
import router from "./routes/authRoutes.js";
env.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello from port 8080");
});

app.use("/auth", router);
app.listen(PORT, () => {
  console.log(`Application is running on ${PORT}`);
});
