import express, { Express,Request, Response } from 'express';
import * as dotenv from 'dotenv';
import path from 'path';

const app:Express = express();

dotenv.config({path:path.resolve(__dirname,'../.env')});

const port = process.env.PORT || 4000;

app.get('/',(req:Request, res:Response)=>{
    res.send("hello world");
});

app.listen(port,()=>{
    console.log(`app running in Port ${port}`);
});


