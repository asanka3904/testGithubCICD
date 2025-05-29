import { Request, Response } from "express"

const index=(req:Request,res:Response)=>{
  res.json("hello from server,github CI/CD");
}

export {index}