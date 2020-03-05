const { Schema, Types: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    publisher: { type: ObjectId, required: true, ref: 'User' },
    created: { type: Date, required: true, default: Date.now },
    subscribers: { type: [ObjectId], ref: 'User' }
})