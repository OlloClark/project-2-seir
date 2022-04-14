const Item = require("../models/item");

function list(req, res) {
    Item.find({}, function (err, items){
    res.render("furnishings/index", {
        items
    })
})}

function newPage(req, res) {
    res.render("furnishings/new")
}

function create(req, res) {
    const item = new Item(req.body);
    item.save(function (err){
        if (err) {
            console.log(err, req.body);
        return res.redirect("/furnishings/new")
        }
        res.redirect(`/furnishings`);
    })};

function show(req, res) {
    Item.findById(req.params.id, function(err, itemDoc) {
        res.render("furnishings/show", {item: itemDoc});
    })
}

module.exports = {
    list,
    new: newPage,
    create,
    show,
}