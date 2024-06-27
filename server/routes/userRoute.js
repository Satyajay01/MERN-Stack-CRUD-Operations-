import express from "express";
import { create, getAll } from "../controller/userController.js";


const route = express.Router();

// --------create route---------
route.post("/create",create)

// --------read route---------
route.get("/getall",getAll)






export default route;