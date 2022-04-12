const router = require('express').Router();
const restaurantController = require('../controller/restaurantController');
const upload = require("../middleware/multer");

router.post('/addRestaurent', upload.array("images"), restaurantController.createRestaurant);

module.exports = router;