const html = require('express').Router();
const withauth =require('../utils/withauth');


html.get("/", withauth, (req,res)=>{res.render("home")})
html.get("/login",(req,res)=>{res.render('login')})