import { Router } from "express";
import {getEmployees} from "../controllers/employess.controller.js"
import { createEmploye,getEmployee } from "../controllers/employess.controller.js";

const router = Router()

router.get("/employees",getEmployees);

router.get("/employees/:id",getEmployee);

router.post("/employees",createEmploye);

export default router;