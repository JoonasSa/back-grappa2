'use strict';
const knex = require('./connection')
const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;