import express from "express";
import { deleteImage, deleteImages } from "../services/cloudinaryService.js";

const router = express.Router();

// 🧩 Xoá 1 ảnh theo public_id
router.post("/delete_cloudinary_image", async (req, res) => {
  try {
    const { public_id } = req.body;
    if (!public_id || typeof public_id !== "string") {
      return res.status(400).json({ error: "Missing or invalid public_id" });
    }

    const result = await deleteImage(public_id);
    res.json({ success: true, result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🧩 Xoá nhiều ảnh
router.post("/delete_cloudinary_images", async (req, res) => {
  try {
    const { public_ids } = req.body;
    if (!Array.isArray(public_ids) || public_ids.length === 0) {
      return res.status(400).json({ error: "No public_ids provided" });
    }

    const results = await deleteImages(public_ids);
    res.json({ success: true, results });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
