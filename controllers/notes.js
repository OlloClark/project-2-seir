const Item = require("../models/item");

function addNote(req, res) {
    Item.findById(req.params.id, function(err, itemDoc) {
        console.log(err)
        req.body.userId = req.user._id
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
        if (!note.user == req.user._id) return res.redirect(`/furnishings/${itemDoc._id}`);
        note.remove();
        itemDoc.save().then(function() {
            res.redirect(`/furnishings/${itemDoc._id}`);
        }).catch(function(err) {
            return next(err);
            //add a line if an unlogged in user tries to delete?
        });
    });
};


module.exports = {
    addNote,
    delete: deleteNote
}