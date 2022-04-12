const express = require("express");
const router = express.Router();
const notesCtrl = require("../controllers/notes");

router.post("/furnishings/:id/notes", notesCtrl.addNote);

module.exports = router;