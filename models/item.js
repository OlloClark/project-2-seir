const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema ({
    content: {
        type: String,
        required: true
    }
})

const itemSchema = new Schema({

object: {
    type: String,
    enum:   ["mattress", "bedframe", "headboard", "chest of drawers", "wardrobe", "dining chair",
            "deskchair", "couch", "cupboard", "shelving unit", "other (please leave details in Notes)"]
},
quantity: {
    type: Number,
    min: 0
},
quality: {
    type: Number,
    min: 1,
    max: 5
},
location: {
    type: String
},
zipCode: {
    type: Number
},
notes: [noteSchema]
})

module.exports = mongoose.model("Item", itemSchema);