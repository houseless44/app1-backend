import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cloudinaryRouter from "./routes/cloudinary.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Route Cloudinary
app.use("/", cloudinaryRouter);

// 🧩 Kiểm tra server hoạt động
app.get("/", (req, res) => {
  res.send("✅ Cloudinary API server is running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
