const router = require('express').Router();
const repasController = require('../controller/repasController');
const upload = require("../middleware/multer");

router.post('/addRepas', upload.array("images"), repasController.createRepas);

module.exports = router;