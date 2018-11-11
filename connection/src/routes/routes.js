const express = require('express');
const router = express.Router();
var packsController = require("../controllers/packsController");

router.get('/',packsController.saludo);
router.get('/login',packsController.login);
router.get('/register',packsController.register);


module.exports = router;