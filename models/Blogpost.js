const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define Blogpost model, any extends 
// userAuth if auth needed

class Blogpost extends Model {}

Blogpost.init (

);

module.exports = Blogpost;