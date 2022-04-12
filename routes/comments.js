const express = require("express");
const router = express.Router();
const commentsCtrl = require("../controllers/comments");

router.post("/furnishings/:id/comments", commentsCtrl.addComment);

module.exports = router;