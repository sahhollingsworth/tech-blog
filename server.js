const path = require('path');
// Import express package
const express = require('express');
// Import session management package
const session = require('express-session');
// Important handlebars template engine 
const exphbs = require('express-handlebars');
// Import routes 
const routes = require('./controllers');
// Import helpers (time formatting)
const helpers = require('./utils/helpers');

// Import sequelize connection
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions with cookies
const sess = {
    secret: 'Super secret secret',
    // Cookie expires after 24 hours
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// Equip handlebars engine to use custom helpers
const hbs = exphbs.create({helpers});

// Equip Express.js with which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Return the incoming request objects as JSON objects
app.use(express.json());
// Parse incoming requests with urlencoded payloads and return as objects
app.use(express.urlencoded({ extended: true }));
// Serve static files in the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Sync sequelize models to the database, then turn on the server
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});