const mongoose = require('mongoose');

mongoose
  .connect('mongodb://mongodb:27017/toto', {
    // mongo cmd 'use db tictac' to init this
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch(e => {
    console.error('Connection error', e.message);
  });
const db = mongoose.connection;

module.exports = db;
