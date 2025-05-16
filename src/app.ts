import express, { Application, Request, Response } from "express";
import cors from "cors"

const app:Application = express()

//use middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));


//testing route
app.get('/', (req:Request, res:Response) => {
  res.send('My server working https://localhost:5000/ routes properly')
})

export default app;