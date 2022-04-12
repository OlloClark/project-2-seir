const Item = require("../models/item");

function list(req, res) {
    Item.find({}, function (err, items){
    console.log("looking at furnishings page");
    res.render("furnishings/index", {
        items
    })
})}

function newPage(req, res) {
    console.log("looking at the 'new' page")
    res.render("furnishings/new")
}

function create(req, res) {
    const item = new Item(req.body);
    item.save(function (err){
        if (err) return res.redirect("/furnishings/new");
        console.log(item);
        res.redirect(`/furnishings`);
    })
    console.log(req.body, "saved new item!")
}

module.exports = {
    list,
    new: newPage,
    create
}