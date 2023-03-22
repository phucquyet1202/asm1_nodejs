import mongoose from "mongoose";
import express from "express";
import routerProduct from "./routers/product"
const app = express();

app.use(express.json());

app.use("/api", routerProduct)

mongoose.connect("mongodb://localhost:27017/test")
export const viteNodeApp = app