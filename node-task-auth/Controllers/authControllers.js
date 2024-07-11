const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');




//handling errors comes from our model restrictions
const handleErrors = (err)=>{ 
  let errors = {name:'',email:'',password:''};
  if(err.message.includes('user validation failed')){  //for handling missing name or invalid email or password <6 chars
    Object.values(err.errors).forEach(({properties})=>{
      errors[properties.path]=properties.message;
    });
    return errors;
  }
  else if(err.code=11000){ // handlind email uniquness *** but it will be cannot used at all as in post request it handled before catch an error
    errors.email='that email is already existed';
    return errors;
  }
};

login_GET = (req,res)=>{
  res.render('login'); 
};

login_POST = async(req,res)=>{
  const {email,password} = req.body;
  try{
  const user = await User.findOne({email:email})
    if(!user){
      res.render('loginerror',{ error: 'Invalid email or password' });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).render('loginerror',{ error: 'Invalid email or password' });
    }
      const token = jwt.sign({name:user.name},'secretKey',{expiresIn:'2h'});
      res.cookie('jwt',token).redirect('/home');
      console.log('login succeded');
       
  }
  catch(error){
    res.json(error);
  }
};

register_GET = (req,res)=>{
    res.render('register'); 
};

register_POST = async (req, res) => {
    const body = req.body;
    try {
      const user = await User.findOne({ email: body.email });
      if (user) {
        res.render('alreadyRegistered');
      } else {
        const salt = await bcrypt.genSalt();
        body.password = await bcrypt.hash(body.password, salt);
        const newUser =await User.create(body);
        console.log('Saved user:', newUser);
        res.redirect('/login');
      }
    } catch (err) {
      const errors = handleErrors(err);
      res.status(500).json(errors);
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
  };



  module.exports = {login_GET,login_POST,register_GET,register_POST,home_GET};
