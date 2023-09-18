const express = require("express");
const mongoose = require("mongoose");
const authVerify = require("./tokenVerify");
const MarkCtrl = require("../controllers/mark-ctrl");

const app = express();

const router = express.Router();

router.post("/marks", MarkCtrl.createMark);
router.put("/marks/:id", MarkCtrl.updateMark);
router.delete("/marks/:id", MarkCtrl.deleteMark);
router.get("/marks/:id", MarkCtrl.getMarkById);
router.get("/marks", MarkCtrl.getMarks);

module.exports = router;
