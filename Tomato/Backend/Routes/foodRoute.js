import express from "express";
import {
  addFood,
  listFood,
  removeFoood,
} from "../Controller/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

//image Storage Engine
const storage = multer.diskStorage({
  destination: "Uploads", // Ensure this directory exists,
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFoood);

export default foodRouter;
