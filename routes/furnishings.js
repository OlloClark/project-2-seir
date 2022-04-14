const express = require("express");
const router = express.Router();
const furnishingsCtrl = require("../controllers/furnishings");
const isLoggedIn = require("../config/auth");

//GET /furnishings index
router.get("/", furnishingsCtrl.list);

//GET /furnishings/new
router.get("/new", furnishingsCtrl.new);

// //GET /furnishings/show page
router.get("/:id", furnishingsCtrl.show);

//POST to /furnishings
router.post("/", furnishingsCtrl.create);

module.exports = router;