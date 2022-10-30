// IMPORT EXPRESS IN ORDER TO CREATE ROUTERS
const express = require("express");

// IMPORT USER CONTROLLER
const usedItemsController = require('../../controllers/api/usedItemsController');

// Use express to create a router
const router = express.Router();

// Use the router to redirect to different controller depending on the method

router.route("/").get(usedItemsController.getUsedItems)
router.route("/").post(usedItemsController.createUsedItem);
router.route("/:id").get(usedItemsController.getUsedItem);
// router.route("/:id").update(usedItemController.updateUsedItem);
router.route("/:id").delete(usedItemsController.deleteUsedItem);


// EXPORT ROUTER TO BE USED IN OTHER PARTS OF OUR APPLICATION
module.exports = router;