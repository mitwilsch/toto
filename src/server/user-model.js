const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema(
  {
    name: { type: String, required: false },
    token: { type: String, required: true },
    totos: [
      {
        title: { type: String, required: false },
        body: { type: String, required: false },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('users', User);
