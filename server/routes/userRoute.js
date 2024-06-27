import express from "express";
import { create } from "../controller/userController.js";


const route = express.Router();

// --------create route---------
route.post("/create",create)






export default route;