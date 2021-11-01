// import relevant parts of sequelize package
const { Model, DataTypes } = require('sequelize');
// import database connection from configs
const sequelize = require('../config/connection');

// Define Blogpost model, any extends 
// userAuth if auth needed

// Initialize Blogpost model by extending off Sequelize's Model class
class Blogpost extends Model {}

Blogpost.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        // Foreign key to User table
        user_id:  {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogpost'
    }
);

module.exports = Blogpost;