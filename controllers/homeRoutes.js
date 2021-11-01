const router = require('express').Router();
const {User, Blogpost} = require('../models')
const userAuth = require('../utils/auth');

// routes
// some/all may require authentication check for access
// userAuth if auth needed

// The hompage displays all blogposts
router.get('/', async (req, res) => {
    try {
        const blogpostData = await Blogpost.findAll({
            //For each blogpost record returned, any associated records in the user model will also be return with that category
            include: [
                {
                    model: User,
                    attributes: ['username'],
                }
            ],
            // order: [
            //     ['createdAt', 'DESC']
            // ],
        });
        // Serialize blogpostData for template to read
        // const blogposts = blogpostData.map((blogpost) => blogpost.get({ plain: true }));
        // render the homepage by passing in blogpost data and session flag to corresponding handlebars template
        // res.render('homepage', {
        //     blogposts,
        //     logged_in: req.session.logged_in,
        // });
        res.status(200).json(blogpostData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// // Render the dashboard page
// router.get('/dashboard', userAuth, async (req, res) => {
//     try {
//         // logic for dashboard page contents
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

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