# Tech Blog - WIP
tbd

## Summary - WIP
tbd

## Installation & Usage - WIP
Ensure you have Node.js installed locally to install packages to and from the public npm registry. [Node.js installation documentation.](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

1. Clone the repository to your local machine.

2. Install dependencies `npm install`
Required when when you first set up the project for local development or use OR if any changes are made to the project's dependencies. [More Node information here.](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)

3. Set up your database mysql shell from the db folder in your terminal with `mysql -u root -p` Steps 2-4 need to be repeated after after any changes to your database or database modules.

4. `source schema.sql` to use the updated schema.

5. `quit` to exit your mysql shell.

6. From the root folder, add the seed data to your now established database with `npn run seed`

7. Then, start the application with `npm start`. 

## Techonologies used
* [Node](https://nodejs.org/en/) - Asynchronous event-driven JavaScript runtime environment that executes JavaScript code outside a web browser
* [NPM](https://www.npmjs.com/) - Node package manager, used in conjunction with JS and Inquirer to support application logic and Command Line interface.
  * [MySQL2](https://www.npmjs.com/package/mysql2) - MySQL client to connect to a MySQL database for app Models.
  * [Sequelizejs](https://sequelize.org/) -  Promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. Used for database creation and management via Models abstraction of database tables.
  * [Expressjs](https://expressjs.com/) - Leveraged for API's, utility methods, and middleware.
  * [Express Handlebars](https://www.npmjs.com/package/express-handlebars) - Used for page Views (content templates).
  * [Express Session](https://www.npmjs.com/package/express-session) - Used for session authentication.
  * [Connect Session Sequelize](https://www.npmjs.com/package/connect-session-sequelize) - Used for session authentication.
  * [Dotenv](https://www.npmjs.com/package/dotenv) - Module for managing environmental variables.
  * [Bcrypt](https://www.npmjs.com/package/bcrypt) - Used for password hashing.
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/javascript) - Core app logic
* [Git](https://git-scm.com/doc) - Version control system to track changes to source code
* [GitHub](https://docs.github.com/en) - Hosts the code repository

## Authors
Sarah Hollingsworth
* [Github](https://github.com/sahhollingsworth)
* [LinkedIn](https://www.linkedin.com/in/sarahhollingsworth/)

## Acknowledgements - WIP