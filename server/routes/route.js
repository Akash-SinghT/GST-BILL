import express from "express";
import { login, signup } from "../controllers/usercontroller.js";
import { submitform } from "../controllers/contactcontroller.js";
const router = express.Router();

//Auth
router.post("/signup", signup);
router.post("/login", login);

//contact

router.post("/contact", submitform);
export default router;
