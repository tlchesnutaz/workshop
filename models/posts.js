const mongoose = require('mongoose')
const Schema = mongoose.Schema


const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', postSchema)
// if name 'Post' here must use elsewhere