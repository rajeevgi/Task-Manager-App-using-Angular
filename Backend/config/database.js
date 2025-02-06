const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('db1', 'root', 'root', {
    host : 'localhost',
    dialect : 'mysql',
    logging : false,
});

sequelize.authenticate()
    .then(() => console.log("Database connection establish successfully..."))
    .catch(() => console.error("Something went wrong!", err));

module.exports = sequelize;