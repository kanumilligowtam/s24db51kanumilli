const mongoose = require("mongoose")
const AlcoholSchema = mongoose.Schema({
Alcohol_type: String,
Brand: String,
Price: Number,
})
module.exports = mongoose.model("Alcohol",
AlcoholSchema)