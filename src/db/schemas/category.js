const { Schema } = require('mongoose');

const category = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  type: {
    type: String,
    trim: true,
    required: true
  },
  parent: {
    type: String
  },
  valid: {
    default: true,
    type: Boolean
  },
  public: {
    default: true,
    type: Boolean
  },
  createAt: {
    default: Date.now,
    type: Date
  },
  updateAt: {
    default: Date.now,
    type: Date
  }
});

module.exports = category;