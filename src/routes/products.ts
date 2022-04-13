import { Router, Request, Response } from 'express';

const router = Router();

router.route('/create')
    .get((req: Request, res: Response) => {
        console.log('prueba');
    })
    .post((req: Request, res: Response) => {
        console.log(req.body);
        res.send('Saved');
    }

    ).put((req: Request, res: Response) => {

    });

///router.get("/create/:id","aqui se debe referenciar al metodo")
export default router;