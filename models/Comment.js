// import relevant parts of sequelize package
const { Model, DataTypes } = require('sequelize');
// import database connection from configs
const sequelize = require('../config/connection');

// Initialize Comment model by extending off Sequelize's Model class
class Comment extends Model {}

Comment.init (
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
        // Foreign key to Blogpost table
        blogpost_id:  {
            type: DataTypes.INTEGER,
            references: {
                model: 'blogpost',
                key: 'id',
            }
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
        modelName: 'comment'
    }
);

module.exports = Comment;