const express = require("express");
const router = express.Router();
const furnishingsCtrl = require("../controllers/furnishings");

//GET /furnishings index
router.get("/", furnishingsCtrl.list);

//GET /furnishings/new
router.get("/new", furnishingsCtrl.new);

module.exports = router;