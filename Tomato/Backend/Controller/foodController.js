import foodmodels from "../Models/foodmodels.js";
import fs from "fs";

//add food item
const addFood = async (req, res) => {
  try {
    // Extract filename from req.file
    const image_filename = req.file.filename;

    // Create a new food item
    const food = new foodmodels({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: image_filename,
      category: req.body.category,
    });

    // Save the food item to the database
    await food.save();

    res.json({ success: true, message: "Food item added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error adding food item" });
  }
};

//all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodmodels.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Error fetching food list" });
  }
};

//remove food item
const removeFoood = async (req, res) => {
  try {
    const food = await foodmodels.findById(req.body.id);
    fs.unlink(`Uploads/${food.image}`, (req, res) => {});
    await foodmodels.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error removing food item" });
  }
};

export { addFood, listFood, removeFoood };
