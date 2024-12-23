require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      connectionString: process.env.URL_DB,
      ssl: false,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    },
  }
};