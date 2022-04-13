import express from 'express';

// Routes
import indexRoutes from './api/routers';
import productsRoutes from './api/routers/products';

class Application {

    app: express.Application;

    constructor() {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', 3000);
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use(indexRoutes);
        this.app.use('/products', productsRoutes);
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }


}

export default Application;