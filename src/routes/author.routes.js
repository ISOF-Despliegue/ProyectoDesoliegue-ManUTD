import express from "express";
import * as authorController from "../controllers/author.controller.js";

const router = express.Router();

router.get("/", authorController.getAuthors);
router.get("/:id", authorController.getAuthorById);
router.post("/", authorController.createAuthor);
router.put("/:id", authorController.replaceAuthor);
router.delete("/:id", authorController.deleteAuthor);

export default router;