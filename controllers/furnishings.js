const Item = require("../models/item");

function list(req, res) {
    console.log("looking at furnishings page")
    res.render("furnishings/index")
}

module.exports = {
    list
}