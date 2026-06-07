import express, { response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { clerkMiddleware } from '@clerk/express'
import { connectDB } from './config/db.js';

dotenv.config();

const app= express();
const PORT= process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());


//DB
connectDB();


//Routes 
app.get("/", (request, response) => {
    response.send("API WORKING");
})

app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`);
})