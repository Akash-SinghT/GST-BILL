import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./models/db.js";
import cors from "cors";
import router from "./routes/route.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.URL,
    credentials: true,
  })
);

// Routes chnages
app.use("/api", router);

// Start server
app.listen(process.env.PORT || 4000, () => {
  console.log(`App is running at Port ${process.env.PORT || 4000}`);
  connectDB();
});
