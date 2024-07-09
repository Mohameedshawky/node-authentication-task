const User = require('../models/user');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');



login_GET = (req,res)=>{
  res.render('login'); 
};

login_POST = async(req,res)=>{
  
  const body = req.body;
  const user = await User.findOne({email:body.email,password:body.password})
    if(user){
      const token = jwt.sign({name:user.name},'secretKey',{expiresIn:'2h'});
      res.cookie('jwt',token).redirect('/home');

      console.log('login succeded');
        }
    else{
      res.render('loginerror');
        }     
};

register_GET = (req,res)=>{
    res.render('register'); 
};

register_POST = async (req, res) => {
    try {
      const body = req.body;

      const user = await User.findOne({ email: body.email });
  
      if (user) {
        res.render('alreadyRegistered');
      } else {
        const newUser = new User(body);
        const result = await newUser.save();
        console.log('Saved user:', result);
        res.redirect('/login');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      res.status(500).json({ error: error.message });
    }
  };

home_GET =  async(req,res)=>{
  const token = req.cookies.jwt;
  try {
      if(token){
            const decode = jwt.decode(token);
            if(decode && decode.name){
                res.render('home');
            }
            else {
                throw error;
            }
      } 
      else{
          throw error;
      }  
    }
    catch (error) {
        res.render('beforeCookie');
      }
  }  


  module.exports = {login_GET,login_POST,register_GET,register_POST,home_GET};