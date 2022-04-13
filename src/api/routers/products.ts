import { Router, Request, Response } from 'express';
import { Producto } from '../../interface/producto.interface';
import ProductRepository from '../../repository/product.repository';
import ProductModel, { productSchema } from "../../schema/products.schema";

const app = Router();

app.route('/id')
    .get(async (req: Request, res: Response) => {
        console.log("prueba");
        console.log("prueba 2");
        res.send(await ProductModel.find());
    });

app.route('/create')
    .post(async (req: Request, res: Response) => {
        const producto = new ProductModel({
            nombre: req.body.nombre,
            precio: req.body.precio,
            marca: req.body.marca
        });
        const val = await producto.save();
        res.send(val);
    });

app.route('/update')
    .put((req: Request, res: Response) => {
    });

export default app;