// If the user isn't logged in, redirect the user to the login page (route)
const userAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next ();
    }
};