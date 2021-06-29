const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-project', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
