import { Router } from "express";
import { getAllProduct, saveChanges } from "../controllers/products-controller";

const router: Router = Router();

router.get("/products", getAllProduct);

router.post("/save", saveChanges);

export default router;
