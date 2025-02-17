require('dotenv').config();

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize( process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASS, {
    host : process.env.MYSQL_HOST,
    dialect : 'mysql',
    logging : false,
});

sequelize.authenticate()
    .then(() => console.log("Database connection establish successfully..."))
    .catch(() => console.error("Something went wrong!"));

module.exports = sequelize;