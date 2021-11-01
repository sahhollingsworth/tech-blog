// Importing all models in database
const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');

// A User can have many Blogposts
User.hasMany(Blogpost, {
    foreignKey:'user_id'
});

// A Blogpost has one User who created it
Blogpost.belongsTo(User, {
    foreignKey:'user_id'
});

// A User can have many Comments
User.hasMany(Comment, {
    foreignKey:'user_id'
});

// A Comment has one User who created it
Comment.belongsTo(User, {
    foreignKey:'user_id'
});

// A Blogpost can have many comments
Blogpost.hasMany(Comment, {
    foreignKey:'blogpost_id'
});

// A Comment has one Blogpost who created it
Comment.belongsTo(Blogpost, {
    foreignKey:'blogpost_id'
});


module.exports = {User, Blogpost, Comment};