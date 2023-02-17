import express from "express";
import { __dirname } from "./src/helpers/helpers.js";
import mainRoutes from './src/routes/mainRoutes.js';
import bodyParser from 'body-parser';
import path from 'path'


const port = process.env.PORT || 3000;
const app  = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(mainRoutes)



app.listen(port, async () => {
    console.log(`🏆 Server running on http://localhost:${port}/`);
});