const router = require('express').Router();
const {Blogpost, Comment} = require('../../models');
const userAuth = require('../../utils/auth');

// routes
// some/all may require authentication check for access
    // auth needed to create, delete, and update

// Render the blogpost page
// router.get('/blogpost', async (req, res) => {
//     try {
//         // logic for blogpost contents
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


module.exports = router;