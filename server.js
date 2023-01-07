const express = require("express");
const routes = require("./routes");
const path = require("path");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection");
const { FORCE } = require("sequelize/types/index-hints");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});
const sess = {
  secret: "cats by 90",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
