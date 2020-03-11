const { Schema, Types: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    lands: [
        { land: {
            type: ObjectId,
            ref: 'Land'
        }, 
        estTime: Date }
    ] 
}, { _id: false })