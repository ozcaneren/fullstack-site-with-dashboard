const express = require("express");
const mongoose = require("mongoose");
const SpecCtrl = require("../controllers/spec-ctrl");

const app = express();

const router = express.Router();

router.post("/specs", SpecCtrl.createSpec);
router.put("/specs/:id", SpecCtrl.updateSpec);
router.delete("/specs/:id", SpecCtrl.deleteSpec);
router.get("/specs/:id", SpecCtrl.getSpecById);
router.get("/specs", SpecCtrl.getSpecs);

module.exports = router;