import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import {authRouter} from "./Routes/auth.js";


const app = express();
const PORT = process.env.PORT||5000;
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use("/auth",authRouter);



app.get("/",(req,res)=>{
    res.send("Hey");
})

app.listen(PORT,()=>{
    console.log(`running on ${PORT}`)
})

