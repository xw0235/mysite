const mongoose = require('mongoose');
const path = require('path');
const YAML = require('yamljs');
const app = require('../app');
const shemas = require('./schemas');

const dbconfig = YAML.load(path.resolve('config.yml')).database;
mongoose.connect(`mongodb://${dbconfig.local.host}:${dbconfig.local.port}/${dbconfig.local.db}`);

let db = {};
const database = mongoose.connection;
database.once('open', function () {
  for (let k in shemas) {
    db[k.slice(0, 1).toUpperCase() + k.slice(1)] = mongoose.model(k, shemas[k]);
  }
});

database.on('error', console.error.bind(console, 'connection error:'));

module.exports = db;
