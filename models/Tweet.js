const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        reuired: true
    },
    date: {
        type: Date, 
        default: Date.now
    }
});

module.exports = Tweet = mongoose.model('tweet', TweetSchema);