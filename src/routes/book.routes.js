import { Router } from "express";
import * as bookController from "../controllers/book.controller.js";

const router = Router();


router.get("/", bookController.getBooks);
router.get("/:id", bookController.getBookById);
router.post("/", bookController.createBook);
router.put("/:id", bookController.replaceBook); 
router.patch("/:id/availability", bookController.updateAvailability);
router.delete("/:id", bookController.deleteBook);

export default router;