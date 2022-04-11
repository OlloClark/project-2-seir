const express = require("express");
const router = express.Router();
const furnishingsCtrl = require("../controllers/furnishings");

//GET /furnishings index
router.get("/", furnishingsCtrl.list);

module.exports = router;