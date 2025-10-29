import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

// 🔧 Cấu hình Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 🧹 Xóa 1 ảnh theo public_id
export async function deleteImage(publicId) {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    console.log(`🗑️ Deleted: ${publicId} →`, result);
    return result;
  } catch (err) {
    console.error("❌ Error deleting image:", err);
    throw err;
  }
}

// 🧹 Xóa nhiều ảnh cùng lúc (mảng public_ids)
export async function deleteImages(publicIds) {
  const results = [];
  for (const id of publicIds) {
    results.push(await deleteImage(id));
  }
  return results;
}
