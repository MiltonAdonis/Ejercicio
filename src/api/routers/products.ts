import { Router, Request, Response } from 'express';
import { Producto } from '../../interface/producto.interface';
import ProductRepository from '../../repository/product.repository';
import ProductModel, { productSchema } from "../../schema/products.schema";

const app = Router();

//Get all
app.get("/", async (req: Request, res: Response) => {
    res.send(await ProductModel.find());
});

//Create
app.post("/", async (req: Request, res: Response) => {
    const product = new ProductModel({
        nombre: req.body.nombre,
        precio: req.body.precio,
        marca: req.body.marca
    });
    const val = await product.save();
    res.send('The product has been saved');
});

//Get by ID
app.get("/:id", async (req: Request, res: Response) => {
    const searchProduct = await ProductModel.findOne({
        _id: req.params.id
    });
    res.send(searchProduct)
})

//Update
app.put("/:id", (req: Request, res: Response) => {
    let id = req.params.id
    let update = req.body
    ProductModel.findByIdAndUpdate(id, update, (err, ProductModel) => {
        if (err) res.status(500).send({ message: 'Error: ${err}' })
        res.status(200).send({ product: ProductModel })
    })
})

//Delete
app.delete("/:id", async (req: Request, res: Response) => {
    const deleteProduct = await ProductModel.deleteOne({
        _id: req.params.id
    });
    res.send('The Product has been deleted');
});


export default app;