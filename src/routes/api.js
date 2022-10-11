import express from 'express';

import subscribeController from '../controller/subscribeController';
import priceController from '../controller/priceController';
const router = express.Router();

const initApiRoutes = (app) => {
    // path, handler   
    // rest api
    // GET - R, POST - C, PUT - U, DELETE - D

    router.post("/subscribe/create", subscribeController.createFunc);

    router.post("/price/create", priceController.createFunc);

    return app.use("/api/meowshouse/", router);
}

export default initApiRoutes;