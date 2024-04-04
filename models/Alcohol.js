const mongoose = require("mongoose")
const DogSchema = mongoose.Schema({
Alcohol_type: String,
Brand: String,
Price: Number,
})
module.exports = mongoose.model("Alcohol",
AlcoholSchema)