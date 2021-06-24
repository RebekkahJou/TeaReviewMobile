const Sequelize = require('sequelize');
const db = require('../db');

const Reviews = db.define('review', {
  teaName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  flavors: {
    type: Sequelize.STRING,
  },
  obtainedFrom: {
    type: Sequelize.STRING,
  },
  cost: {
    type: Sequelize.INTEGER,
  },
  perQty: {
    type: Sequelize.STRING,
  },
  brewingStyle: {
    type: Sequelize.TEXT,
  },
  rebrewing: {
    type: Sequelize.TEXT,
  },
  review: {
    type: Sequelize.TEXT,
  },
});

// class methods

module.exports = Reviews;
