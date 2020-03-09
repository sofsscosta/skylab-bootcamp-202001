const { Schema, Types: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    name: { type: String, required: true },
    userId: { type: ObjectId, required: true },
    location : { type: String, required: true }, // geolocation
    soiltype: { type: String, required: true }, //best type of soil to plant in
    retrieved: { type: Date },
    veggies: { type: [ObjectId], ref: 'Item' }, //array of objectsIds of all veggies that go into the land
    scheme: { type: [Object], ref: 'Item', default: [
        { line1: [false, false, false, false] },
        { line1: [false, false, false, false] },
        { line1: [false, false, false, false] },
        { line1: [false, false, false, false] },
        { line1: [false, false, false, false] },
        { line1: [false, false, false, false] }
    ], required: true },
    created: { type: Date } //array with objects representing a line, made of an array of 0's and ids of items
})