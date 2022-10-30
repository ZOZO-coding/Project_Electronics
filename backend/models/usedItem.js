const mongoose = require('mongoose')

const UsedItemSchema = new mongoose.Schema(
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
    condition: {
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

const UsedItem = mongoose.model("UsedItem", UsedItemSchema)

module.exports = UsedItem