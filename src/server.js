import express from 'express';
import configViewEngine from './configs/viewEngine';
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 9090;

// config view engine
configViewEngine(app);


app.listen(PORT, () => {
    console.log('Backend is running on the port = ' + PORT);
});