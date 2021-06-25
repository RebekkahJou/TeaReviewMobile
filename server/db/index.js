//this is the access point for all things database related!
//if doesn't work, look into requiring './database'

const db = require('./db');
const Sequelize = require('sequelize');
//const User = require('./models/user');
const Section = require('./models/sections');
const Review = require('./models/reviews');

//associations could go here!
Section.hasMany(Review);
Review.belongsTo(Section);
//one-many association
// foreign key -> orderId

module.exports = {
  db,
  models: {
    //User,
    Section,
    Review,
  },
};
