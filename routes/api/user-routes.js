const user = require("express").Router();
const withauth = require("../../utils/withauth");
const { User } = require("../../models");

user.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await User.create({
      username,
      password,
      fav_team_name: null,
    });
    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = newUser.id;
      res.json(newUser);
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

user.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    if (!userData) {
      res.statusMessage = "User not found!";
      return res.status(404).end();
    }
    const correctPW = await userData.checkPassword(req.body.password);
    if (!correctPW) {
      res.statusMessage = "Incorrect password!";
      return res.status(400).end();
    }
    req.session.save(() => {
      (req.session.logged_in = true), (req.session.user_id = userData.id);
      res.json({ message: "Logged in!" });
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

user.get("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.redirect("/");
    });
  } else {
    res.redirect("/login");
  }
});

user.put("/favoriteteam", async (req, res) => {
    try {
        const updatedUser = await User.update(
        { fav_team_name: req.body.teamName },
        { where: { id: req.session.user_id } }
      );
      if (updatedUser) {
        res.json(updatedUser)
      } else {
       return res.status(404).json({message:'User not found!'})
      }

    } catch (err){
        res.status(500).json(err)
    }
});
// write route to update users favorite team name
module.exports = user;
