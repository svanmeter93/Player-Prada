const fetch = require('node-fetch');
const router = require('express').Router();

router.get("/",(req,res)=>{
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
    res.send(data)
})
}) 

 // {
// 	"_embedded": {
// 		"teamWinStatsList": [
// 			{
// look at file structure for last mini-project 
module.exports = router;