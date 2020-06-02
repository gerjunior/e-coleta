import path from 'path';

module.exports = {
  client: 'pg',
  connection: {
    user: 'postgres',
    host: 'localhost',
    password: 'docker',
    port: 5432,
    database: 'ecoleta',
  },
  searchPath: ['knex', 'public'],
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
  },
};
