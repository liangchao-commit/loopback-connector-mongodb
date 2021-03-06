// Copyright IBM Corp. 2015,2019. All Rights Reserved.
// Node module: loopback-connector-mongodb
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

const DataSource = require('loopback-datasource-juggler').DataSource;
const connector = require('../..');

const db = new DataSource(connector, {
  host: process.env.LB_HOST || '127.0.0.1',
  port: process.env.LB_PORT || 27017,
  database: process.env.LB_DB || 'strongloop',
});
const Todo = db.define('Todo', {
  content: {type: String},
});

module.exports = Todo;
