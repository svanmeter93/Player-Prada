const fetch = require('node-fetch');
const html = require('express').Router();
const withauth =require('../utils/withauth');
const {User} = require("../models");
html.get("/",withauth,(req,res)=>{
    res.redirect("teams")
})
html.get("/login",(req,res)=>{res.render('login')})
html.get("/teams",withauth, async(req,res)=>{
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
	// console.log(data._embedded.teamWinStatsList);
	const teamObj = data._embedded.teamWinStatsList;
	
	teamObj.sort((a, b) => a.name.localeCompare(b.name));
	// pull data from database for favorite team
	// teamObj.unshift(/*object data from favorite team pull */);

	data._embedded.teamWinStatsList.forEach(element => {
		let transformed = element.name.replace(/\s+/g, '-').toLowerCase();
		console.log(transformed);
		return transformed.substring(0, transformed.indexOf("-x"));
	});

	res.render("teams",{teams:data._embedded.teamWinStatsList})
})
})

html.get("/signup",(req,res)=>{
    res.render("signup")
})

module.exports = html;
