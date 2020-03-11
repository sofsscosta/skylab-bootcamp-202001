const { Schema, Types: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    name: { type: String, required: true },
    userId: { type: ObjectId, required: true },
    location : { type: String, required: true }, // geolocation
    soiltype: { type: String, required: true }, //best type of soil to plant in
    retrieved: { type: Date },
    veggies: { type: 
    [
        {  
            _id: { type: ObjectId, ref: 'Item' }, 
            estTime: { type: Date }, 
            userTime: { type: Number },
            state: { type: String, enum: ['planted', 'not planted', 'harvested'], default: 'not planted' } 
        }
    ]
}, //array of objectsIds of all veggies that go into the land
    scheme: { type: Array
        , default: [
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]
    , required: true,
 },
    created: { type: Date } //array with objects representing a line, made of an array of 0's and ids of items
})