const router = require('express').Router();
const {User, Blogpost} = require('../models')
const userAuth = require('../utils/auth');

// The hompage displays all blogposts
router.get('/', async (req, res) => {
    try {
        const blogpostData = await Blogpost.findAll({
            //For each Blogpost record, return the username attribute for any associated User record
            include: [
                {
                    model: User,
                    attributes: ['username'],
                }
            ],
            order: [
                ['date_created', 'DESC'],
            ],
        });
        // Serialize blogpostData for template to read
        const blogposts = blogpostData.map((blogpost) => blogpost.get({ plain: true }));
        // Testing format
        console.log(blogposts);
        // render the homepage by passing in blogpost data and session flag to corresponding handlebars template
        res.render('homepage', {
            blogposts,
            logged_in: req.session.logged_in,
        });
        // Testing route response content in Insomnia
        // res.status(200).json(blogpostData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Render the dashboard with all blogpost by a given user id
router.get('/dashboard', userAuth, async (req, res) => {
    try {
        // logic for dashboard page contents
    } catch (err) {
        res.status(500).json(err);
    }
});

// Block user in log out state from accessing Dashboards


// Render the login view for user to login
router.get('/login', (req, res) => {
    // if user is already logged in, redirect them to the Dashboard page
    if(req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});


module.exports = router;