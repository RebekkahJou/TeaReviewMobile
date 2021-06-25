const Sequelize = require('sequelize');
const db = require('../db');

const Section = db.define('section', {
  title: {
    type: Sequelize.STRING,
  },
  time: {
    type: Sequelize.INTEGER,
    allowNull: true,
    validate: {
      notEmpty: false,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {
      notEmpty: false,
    },
  },
  instructions: {
    type: Sequelize.TEXT,
  },
});

// class methods

module.exports = Section;
