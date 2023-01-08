const {Model,DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Team extends Model {}

Team.init(
    {
       team_id:{
              type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
       },
         team_name:{
                type:DataTypes.STRING,  
                allowNull:false,
            }
    },
    {
        sequelize,
        timestamps:false,
        modelName:"teams",
        freezeTableName:true,
    },
    {
    team_division :{
        type:DataTypes.STRING,
        allowNull:false,
    }}
);

module.exports = Team