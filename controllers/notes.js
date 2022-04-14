const Item = require("../models/item");

function addNote(req, res) {
    Item.findById(req.params.id, function(err, itemDoc) {
        console.log(err)
        console.log(req.body);
        itemDoc.notes.push(req.body);
        itemDoc.save(function (err) {
            console.log(itemDoc);
            res.redirect(`/furnishings/${itemDoc._id}`);
        });

    });
};

function deleteNote(req, res, next) {
    Item.findOne({"notes._id": req.params.id}).then(function(itemDoc) {
        const note = itemDoc.notes.id(req.params.id);
        if (!note.user.equals(req.user._id)) return res.redirect(`/furnishings/${itemDoc._id}`);
        note.remove();
        itemDoc.save().then(function() {
            res.redirect(`/furnishings/${itemDoc._id}`);
        }).catch(function(err) {
            return next(err);
        });
    });
};


module.exports = {
    addNote,
    delete: deleteNote
}