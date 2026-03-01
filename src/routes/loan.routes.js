import express from "express";
import * as loanController from "../controllers/loan.controller.js";

const router = express.Router();

router.get("/", loanController.getLoans);
router.get("/:id", loanController.getLoanById);
router.post("/", loanController.createLoan);

// endpoint para devolver libro
router.patch("/:id/return", loanController.returnLoan);

router.delete("/:id", loanController.deleteLoan);

export default router;