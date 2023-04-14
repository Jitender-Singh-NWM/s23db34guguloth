const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
Breed: String,
Dimension: String,
value: Number
})
module.exports = mongoose.model("Dog",
dogSchema)