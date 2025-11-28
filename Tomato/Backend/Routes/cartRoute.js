import express from "express";
import {
  addToCart,
  removeFromCart,
  getCart,
} from "../Controller/cartController.js";
import authMiddlewarel from "../MiddleWare/auth.js";
const cartRouter = express.Router();
cartRouter.post("/add", authMiddlewarel, addToCart);
cartRouter.post("/remove", authMiddlewarel, removeFromCart);
cartRouter.post("/get", authMiddlewarel, getCart);

export default cartRouter;
