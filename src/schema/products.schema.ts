import mongoose from "mongoose";

//Creando el Schema
const productSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    marca: String
}, { versionKey: false })

//Creando el Modelo
const ProductModel = mongoose.model('product', productSchema)

export default ProductModel;