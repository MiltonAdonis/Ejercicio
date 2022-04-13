
import { response } from "express";
import mongoose from "mongoose";
import ProductModel, { productSchema } from "../schema/products.schema";

let errores: string[] = []

class ProductRepository {

    //List All Products
    async getAllProducts() {
        const producto = await ProductModel.find();
        if (!producto) {
            //////mostrar mensajes de que no existen productos
            console.log('No existen productos')
        }
        return producto;
    }

    //Create
    async createProducts(req: Request, res: Response) {
        const producto = new ProductModel({
            nombre: "Apple Watch Series 6",
            precio: "329990",
            marca: "Apple"
        });
        if (producto.nombre || producto.precio || producto.marca === '') {
            console.log('El nombre no puede estar vacío');
        }
        const resultado = await producto.save();
        console.log(resultado);
    }

    //Edit
    // async editProducts(req: Request, res: Response) {
    //     const producto = async (id) => {
    //         const producto = await ProductModel.updateOne({ _id: id },
    //             {

    //             })
    //     }
    // }

    //Editar
    // const actualizar = async (id) => {
    //     const producto = await ProductoModel.updateOne({ _id: id },
    //         {
    //             $set: {
    //                 nombre: 'Apple Watch Series 6 MODIFICADO',
    //                 precio: 430000,
    //                 marca: 'Apple MODIFCIADO'
    //             }
    //         })
    // }

    //Eliminar
    // const eliminar = async (id) => {
    // const producto = await ProductoModel.deleteOne({ _id: id })
    // console.log(producto)
    // }




}

export default ProductRepository;