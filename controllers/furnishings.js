const Item = require("../models/item");

function list(req, res) {
    console.log("looking at furnishings page")
    res.render("furnishings/index")
}

function newPage(req, res) {
    console.log("looking at the 'new' page")
    res.render("furnishings/new")
}

module.exports = {
    list,
    new: newPage
}