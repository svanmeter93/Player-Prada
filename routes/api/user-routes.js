const user = require('express').Router();
const withauth =require('../utils/withauth');
const {User} = require("../../models");

user.post("/",async(req,res)=>{
    try {
        const {username,password} = req.body
        const newUser = await User.create({username,password,fav_team_name:null})
        req.session.save(()=>{
            req.session.logged_in=true
            req.session.user_id=newUser.id
            res.json(newUser)
        })
    } catch (error) {
        res.status(400).json(error)
    }
});

user.post("/login",async(req,res)=>{
    try{
        const userData = await User.findOne({where:{username:req.body.username}})
        if (!userData) {
            return res.status(404).json({message:"User not found!"})
        } 
        const correctPW = await userData.checkPassword(req.body.password)
        if (!correctPW) {
            return res.status(400).json({message:"Incorrect password!"})
        }
        req.session.save(()=> {
            req.session.logged_in=true
        res.json({message:'Logged in!'})
        }
        )
    }
    catch (error) {
        res.status(500).json(error)}
});
// write route to update users favorite team name