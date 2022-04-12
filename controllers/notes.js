const Item = require("../models/item");

function addNote(req, res) {
    Item.findById(req.params.id, function(err, itemDoc) {
        console.log(err)
        console.log(req.body);
        itemDoc.notes.push(req.body);
        itemDoc.save(function (err) {
            console.log(itemDoc);
            res.redirect(`/furnishings/${itemDoc._id}`);
        })

    })
}


module.exports = {
    addNote
}