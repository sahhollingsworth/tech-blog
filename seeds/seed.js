const sequelize = require('../config/connection');
const {User, Blogpost, Comment} = require('../models');

// Create variables a based on the seed data in each file - 1/model
const userData = require('./userData.json');
const blogpostData = require('./blogpostData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({force:true});
    // Create records in the user table for all objects in the seed data
    const users = await User.bulkCreate(userData,{
        individualHooks: true,
        returning: true
    });
    // Create records in the blogpost table for all objects in the seed data
    const blogposts = await Blogpost.bulkCreate(blogpostData,{
        returning: true
    });
    // Create records in the comment table for all objects in the seed data
    const comments = await Comment.bulkCreate(commentData,{
        returning: true
    });
    // exit this process
    process.exit(0);
};

// initialize seeding of database tables
seedDatabase();