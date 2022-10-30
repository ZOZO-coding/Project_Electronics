const Item = require('../../models/Item')

const getItems = async (req, res) => {
    const items = await Item.find({})

    res.status(200).json(items)
}

const getCategory = async (req, res) => {
    const { category } = req.params
    const categoryItems = await Item.find({ category })
    res.status(200).json(categoryItems)
}

const getItem = async (req, res) => {
    const { id } = req.params;
    const item = await Item.findById(id)
    if (!item) {
        return res.status(404).json({error: 'No such item'})
    }
    res.status(200).json(item)
}

const createItem = async (req, res) => {
    const { name, price, img, category, description } = req.body
    try {
        const item = await Item.create({ name, price, img, category, description})
        res.status(200).json(item)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteItem = async (req, res) => {
    const { id } = req.params

    const item = await Item.findOneAndDelete({_id: id})

    res.status(200).json(item)
}


module.exports = {
    createItem,
    getItems,
    getItem,
    deleteItem,
    getCategory
}