const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    price: {
      type: Number
    },
    img: {
      type: String
    },
    category: {
      type: String
    },
    description: {
      type: String
    },
  },
  {
    tooObject: {virtuals: true},
    toJSON: { virtuals: true },
  }

)

const Item = mongoose.model("Item", itemSchema)

module.exports = Item