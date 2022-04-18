import { Router, Request, Response } from 'express';
import { Producto } from '../../interface/producto.interface';
import ProductRepository from '../../repository/product.repository';
import ProductModel, { productSchema } from "../../schema/products.schema";

const app = Router();

//Get all
app.get("/", async (req: Request, res: Response) => {
    console.log("prueba");
    console.log("prueba 2");
    res.send(await ProductModel.find());
});

//Create
app.post("/", async (req: Request, res: Response) => {
    const producto = new ProductModel({
        nombre: req.body.nombre,
        precio: req.body.precio,
        marca: req.body.marca
    });
    const val = await producto.save();
    res.send('The product has been saved');
});

//Edit
app.route('/edit/:nombre')
    .get(async (req: Request, res: Response) => {
        const { nombre } = req.body.nombre;
        const product = await ProductModel.findById(nombre);
        res.render('products/edit', { product });
    })


//Delete
app.route('/:_id')
    .get(async (req: Request, res: Response) => {
        const { _id } = req.body;
        await ProductModel.findByIdAndDelete(_id);
        res.send('Product has been deleted');
    });

export default app;