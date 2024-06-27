import express from "express";
import { create, getAll, getOne, update } from "../controller/userController.js";


const route = express.Router();

// --------create route---------
route.post("/create",create)

// --------read all data route---------
route.get("/getall",getAll)

// --------read One data route---------
route.get("/getone/:id",getOne) // http://localhost:8000/api/getone/667da2129994fa4848625db0

// --------update route---------
route.put("/update/:id",update) // http://localhost:8000/api/update/667da2ef9994fa4848625db3






export default route;