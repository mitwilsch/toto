const mongoose = require('mongoose');

mongoose
  .connect('mongodb://0.0.0.0:8000/toto', {
    // mongo cmd 'use db tictac' to init this
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch(e => {
    console.error('Connection error', e.message);
  });
const db = mongoose.connection;

module.exports = db;
