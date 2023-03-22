import Product from "../models/product";
import Joi from "joi";
const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
})
export const getAll = async (req, res) => {
    try {
        const product = await Product.find()
        return res.json({
            message: 'lay sp thanh cong',
            product
        })
    } catch (error) {
        return res.status(404).json({ message: error })
    }
}

export const getById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        return res.json({
            message: 'lay sp thanh cong',
            product
        })
    } catch (error) {
        return res.status(404).json({ message: error })
    }
}

export const create = async (req, res) => {
    const { error } = productSchema.validate(req.body)
    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        })
    }
    try {
        const product = await Product.create(req.body)
        return res.json({
            message: 'them sp thanh cong',
            product
        })
    } catch (error) {
        return res.status(404).json({ message: error })
    }
}

export const update = async (req, res) => {
    const { error } = productSchema.validate(req.body)
    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        })
    }
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({
            message: 'cap nhat sp thanh cong',
            product
        })
    } catch (error) {
        return res.status(404).json({ message: error })
    }
}

export const dele = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        return res.json({
            message: 'xoa sp thanh cong',
            product
        })
    } catch (error) {
        return res.status(404).json({ message: error })
    }
}