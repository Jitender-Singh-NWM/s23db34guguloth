const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
Breed: {
    type:String,
    required:[true, 'Breed must have a value']
    
    },
Dimension: String,
value: {
    type:Number,
    set: v => Math.floor(v),
    
    min: [0, 'value must be at least 1'],
    max:[1000,'value must be less than 10']
    
}}
)
module.exports = mongoose.model("Dog",
dogSchema)