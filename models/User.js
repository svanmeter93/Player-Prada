const {Model,DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
	checkPassword(pw) {
    	    return bcrypt.compareSync(pw,this.password)
	}
	
	checkFavorite(fav) {
	    return fav === this.fav_team_name;
	}
};

User.init(
    {
        id:{
            type:DataTypes.INTEGER, 
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username:{
            type:DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [5,25],
            }

        },
        fav_team_name:{
            type:DataTypes.STRING,
            allowNull:true,
        },
    },
    {
        sequelize,
        timestamps:false,
        modelName:"user",
        freezeTableName:true,
        hooks:{
            beforeCreate: async(newUserData) =>{
                newUserData.password=await bcrypt.hash(newUserData.password,10)
                return newUserData 
             }
        }
    }
);

module.exports = User 
