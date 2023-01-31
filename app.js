import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer"

const app  = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.listen(8000, console.log("Server running..."))