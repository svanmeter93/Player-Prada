const fetch = require('node-fetch');
const html = require('express').Router();
const withauth =require('../utils/withauth');
const {User} = require("../models");
const { json } = require('sequelize');

html.get("/", withauth, (req,res)=>{res.render("home")})
html.get("/login",(req,res)=>{res.render('login')})
html.get("/teams",async(req,res)=>{
    fetch('https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/win-stats/2022',{
    method:"GET",
    headers: {
        "X-RapidAPI-Key":"eeb456aa43msh70da8f932010539p1cd7cbjsn3bd3befcf45b",
        "X-RapidAPI-Host":"nfl-team-stats.p.rapidapi.com",
    }
})


.then((response)=>
    response.json()
).then((data)=>{
    // localStorage.setItem("teamWinStatsList",data._embedded.teamWinStatsList)
    res.render("teams",{teams:JSON.parse(data.embedded.teamWinStatsList)})
})
})

module.exports = html