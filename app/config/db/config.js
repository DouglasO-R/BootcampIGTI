const fs = require('fs');

// 

module.exports = {
  development: {
    username: 'root',
    password: 'root',
    database: 'mydb',
    host: '172.17.0.1',
    port: '5432',
    dialect: 'postgres'
  },
  test: {
    username: 'root',
    password: 'root',
    database: 'mydb',
    host: '127.0.0.1',
    port: '5432',
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DIALECT
  }
};