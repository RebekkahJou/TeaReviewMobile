//this is the access point for all things database related!
//if doesn't work, look into requiring './database'

const db = require('./db');
const Sequelize = require('sequelize');
//const User = require('./models/user');
const TeaType = require('./models/teaTypes');
const Review = require('./models/teaTypes');

//associations could go here!
TeaType.hasMany(Review);
Review.belongsTo(TeaType);
//one-many association
// foreign key -> orderId

module.exports = {
  db,
  models: {
    //User,
    TeaType,
    Review,
  },
};
