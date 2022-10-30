const UsedItem = require("../../models/usedItem");


exports.getUsedItems = async (req, res) => {
  try{
    const usedItems = await UsedItem.find({}) // pass an empty object to find everything
    res.status(200).json(usedItems)

  }
  catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    
  })
}
}

exports.getUsedItem = async (req, res) => {
  try{
    const usedItem = await UsedItem.findById(req.params.id)
    res.status(200).json(usedItem)

  }
  catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
  })
}
}

exports.deleteUsedItem = async (req, res) => {
  try{
    const { id } = req.params
    const usedItem = await UsedItem.findOneAndDelete({_id: id})
  }
  catch (error){
    response.status(500).json({
      status: "error",
      error: error,
  })
}
}


exports.createUsedItem = async (request, response) => {
  try {
    const newUsedItem = await UsedItem.create({
      name: request.body.name, // ------------
      price: request.body.price, 
      img: request.body.img,
      category: request.body.category,
      condition: request.body.condition,
      description: request.body.description,
    });

      response.status(200).json(newUsedItem)
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};