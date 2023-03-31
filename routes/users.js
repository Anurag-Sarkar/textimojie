const mongoose = require("mongoose")

mongoose.connect("mongodb://0.0.0.0:27017/txtemojie")

const pwsdSchema = mongoose.Schema({
  pwsd:String,
  pin:String,
})

module.exports = mongoose.model("password",pwsdSchema)