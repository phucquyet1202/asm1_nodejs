import express from "express";
import { create, dele, getAll, getById, update } from "../controllers/product";
const router = express.Router()
router.get('/products', getAll)
router.get('/products/:id', getById)
router.put("/products/:id", update)
router.post("/products", create)
router.delete("/products/:id", dele)

export default router