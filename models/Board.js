const mongoose = require('mongoose');
const { Schema } = mongoose;


const boardSchema = new Schema({
    name: String,
    public: Boolean,
    users: [ ],
    sections: [ boardSectionSchema ],
    dateCreated: { type: Date, default: Date.now() }
})

const boardSectionSchema = new Schema({
    name: String,
    cards: [ boardCardSchema ],
    dateCreated: { type: Date, default: Date.now()}

})

const boardCardSchema = new Schema({
    name: String,
    description: String,
    comments: [ boardCardsCommentSchema ],

})

const boardsCardsCommentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    dateCreated: { type: Date, default: Date.now()},
    content: String
})


const Board = mongoose.model('Board', boardSchema);

