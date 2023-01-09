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
).then(async (data) =>{
	// console.log(data._embedded.teamWinStatsList);
	const teamObj = data._embedded.teamWinStatsList;
	const user = await User.findOne({
		where: { id:req.session.user_id }
	});

	teamObj.forEach(element => {
		let strArr = element.name.split(' ');
		strArr = strArr.filter( word => !word.startsWith('x'));
		element.id = strArr.join('-').toLowerCase();
	});

	teamObj.sort((a, b) => a.id === user.fav_team_name || b.id === user.fav_team_name ? -1 : 1)
	// pull data from database for favorite team
	// teamObj.unshift(/*object data from favorite team pull */);
	console.log(teamObj);
	res.render("teams",{teams: teamObj})
})
})

html.get("/signup",(req,res)=>{
    res.render("signup")
})

module.exports = html;
