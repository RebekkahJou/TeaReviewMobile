//this is the access point for all things database related!
//if doesn't work, look into requiring './database'

const db = require('./db');
const Sequelize = require('sequelize');
const User = require('./models/user');

//associations could go here!

//many-many association
// foreign key -> orderId

module.exports = {
  db,
  models: {
    User,
    TeaTypes,
    TeaReviews,
  },
};
