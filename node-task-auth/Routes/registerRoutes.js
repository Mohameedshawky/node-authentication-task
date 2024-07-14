const express = require('express');
const router = express.Router();

const  {register_GET,register_POST}  = require('../Controllers/authControllers');

router.get('/register',register_GET);
router.post('/register',register_POST );

  module.exports = router;
