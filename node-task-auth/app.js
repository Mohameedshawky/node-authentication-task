const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


const loginRoutes = require('./Routes/loginRoutes');
const registerRoutes = require('./Routes/registerRoutes');


const app = express();

app.set('view engine','ejs');

app.use(cookieParser());
app.use(morgan('tiny'));
app.use(express.urlencoded({extended:true}));

const DB = 'mongodb+srv://taskUser:taskUser1234@cluster0.jettpl4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(DB)
    .then(()=>{
        console.log('connected to mongo');
        app.listen(3000);
    })
    .catch((err)=>{console.log(err);});


app.get('/',(req,res)=>{res.render('index');});

app.get('/home',home_GET); 

app.use(loginRoutes);
app.use(registerRoutes);

app.use((req,res)=>{res.status(404).render('404');});

