import mongoose from "mongoose";
import dotenv from "dotenv";
import chalk from "chalk";
dotenv.config();
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(chalk.bgGreenBright("DB Connected"));
  } catch (error) {
    console.log(chalk.bgRedBright("DB Connection Error:", error));
  }
};
