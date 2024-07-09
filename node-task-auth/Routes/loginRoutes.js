const express = require('express');  // const {Router}=require('express');
const router = express.Router();     // const router = Router();

const  {login_GET,login_POST}  = require('../Controllers/authControllers');


router.get('/login',login_GET);
router.post('/login',login_POST);

module.exports = router;