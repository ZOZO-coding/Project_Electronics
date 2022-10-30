// IMPORT EXPRESS IN ORDER TO CREATE ROUTERS
const express = require("express");

// controllers
const { getItems, getItem, createItem, deleteItem, getCategory } = require('../../controllers/api/itemController')

// Use express to create a router
const router = express.Router();

router.get('/:id', getItem)
router.get('/', getItems)
router.get('/category/:category', getCategory)

router.post('/', createItem)
router.delete('/:id', deleteItem)

module.exports = router;