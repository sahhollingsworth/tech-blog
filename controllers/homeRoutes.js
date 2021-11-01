const router = require('express').Router();
const {User, Blogpost} = require('../../models');
const userAuth = require('../utils/auth');

// routes
// some/all may require authentication check for access
// userAuth if auth needed

// Render the homepage
router.get('/', async (req, res) => {
    try {
        // logic for homepage contents
    } catch (err) {
        res.status(500).json(err);
    }
});

// Render the dashboard page
router.get('/dashboard', userAuth, async (req, res) => {
    try {
        // logic for dashboard page contents
    } catch (err) {
        res.status(500).json(err);
    }
});

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