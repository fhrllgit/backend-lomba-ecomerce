const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transaksiController");
const { verifyToken, isAdmin } = require("../middleware/authMiddleware");

router.get("/summary", verifyToken, isAdmin, transactionController.getTransactionSummary);

router.get("/list", verifyToken, isAdmin, transactionController.getTransactionList);

module.exports = router;
