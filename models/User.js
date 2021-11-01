// import relevant parts of sequelize package
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
// import database connection from configs
const sequelize = require('../config/connection');

// Initialize User model by extending off Sequelize's Model class
class User extends Model {
    //something with authentication here
    // userAuth if auth needed
}

User.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            }
        },

    },
    {
        hooks: {
            // Hash password values before saving to db when a new account is created
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            // Future dev - If change password is supported, needs UI
            // beforeUpdate: async (updatedUserData) => {
            //     updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            //     return updatedUserData;
            // },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);


module.exports = User;