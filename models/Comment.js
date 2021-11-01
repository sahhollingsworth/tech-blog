const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define Blogpost model, any extends 
// userAuth if auth needed

class Comment extends Model {}

Comment.init (

);

module.exports = Comment;