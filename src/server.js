import express from 'express';
// import configViewEngine from './config/viewEngine';
import initApiRoutes from './routes/api';
require("dotenv").config();
import bodyParser from 'body-parser';
import connection from './config/connectDB';

const app = express();
const PORT = process.env.PORT || 9090;

// config view engine
// configViewEngine(app);

// config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// test connection db 
connection();

// init web routes
initApiRoutes(app);

app.listen(PORT, () => {
    console.log('Backend is running on the port = ' + PORT);
});