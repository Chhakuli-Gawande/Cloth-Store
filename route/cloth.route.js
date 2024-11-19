import express from "express";
import { getcloth } from "../controller/cloth.controller.js";

const router = express.Router();

router.get("/", getcloth);

export default router;