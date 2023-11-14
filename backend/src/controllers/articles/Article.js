const Sequelize = require('sequelize');
const connection = require('../../database/db');

const Article = connection.define('articles', {
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false 
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = Article;