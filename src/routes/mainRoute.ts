import { Router } from "express";
import { index } from "../controllers/mainController";

const mainRouter=Router();

mainRouter.get('/',index);

export default mainRouter