const express = require('express');
const router = express.Router();
const controller = require('../controller/vistaInicial.controller');

router.get('/', controller.index);

router.post('/altausu', controller.altausu);

  
module.exports = router;