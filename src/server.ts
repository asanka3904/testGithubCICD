import express from "express";
import { env } from "process";
import mainRouter from "./routes/mainRoute";

const app=express();
const PORT=env.PORT || 3000;

app.use(express.json());
app.use("/",mainRouter)

app.listen(PORT,()=>{
    console.log(`app is listed on ${PORT}`)
})