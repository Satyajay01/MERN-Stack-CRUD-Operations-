import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();


const PORT = process.env.PORT || 7000; 
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(()=>{
    console.log("MongoDB Connected successfully");
    app.listen(PORT, ()=>{
        console.log(`Server is Started PORT: ${PORT}`);
    })


}).catch(error => console.log(error))



