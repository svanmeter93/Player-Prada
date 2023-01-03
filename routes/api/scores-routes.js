const fetch = require('node-fetch');
const router = require('express').Router();

router.get("/",(req,res)=>{
    fetch('https://odds.p.rapidapi.com/v4/sports/americanfootball_nfl/scores?daysFrom=3',{
        method:"GET",
        headers: {
            "X-RapidAPI-Key": "eeb456aa43msh70da8f932010539p1cd7cbjsn3bd3befcf45b",
            "X-RapidAPI-Host": "odds.p.rapidapi.com",
    }
 })
    .then((response)=>
    response.json()
).then((data)=>{
    // localStorage.setItem("teamWinStatsList",data._embedded.teamWinStatsList)
    res.send(data)
})
}) 

module.exports = router;