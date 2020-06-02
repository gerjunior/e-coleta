import knex from 'knex';

const connection = knex({
  client: 'pg',
  connection: {
    user: 'postgres',
    host: 'localhost',
    password: 'docker',
    port: 5432,
    database: 'ecoleta',
  },
  searchPath: ['knex', 'public'],
});

export default connection;
