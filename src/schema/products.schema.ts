import mongoose, { Schema, model, } from "mongoose";

//Creando el Schema
export const productSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    marca: { type: String, required: true }
})

//Creando el Modelo
const ProductModel = mongoose.model('product', productSchema)
export default ProductModel;