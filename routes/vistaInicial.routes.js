const express = require('express');
const router = express.Router();
const controller = require('../controller/vistaInicial.controller');

router.get('/', controller.index);

router.post('/login', controller.login);

  
module.exports = router;