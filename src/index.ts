import App from './app';
import connect from './database'
import mongoose from 'mongoose';

//Starting the Server
const app = new App();
mongoose.connect("mongodb://localhost:27017/productos", {}).then(result =>
    app.start()).catch(err => console.log(err))