const express = require("express");
const router = express.Router();
const notesCtrl = require("../controllers/notes");

//POST note on item
router.post("/furnishings/:id/notes", notesCtrl.addNote);
//DELETE note on item
router.delete("/notes/:id", notesCtrl.delete);

module.exports = router;