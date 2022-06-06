require('dotenv').config();

const dir = process.env.NODE_ENV === 'development' ? 'src' : 'dist';

module.exports = [
  {
    name: 'default',
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    entities: [`./${dir}/modules/**/infra/typeorm/entities/*{.js,.ts}`],
    migrations: [`./${dir}/shared/infra/typeorm/migrations/*{.js,.ts}`],
    cli: {
      migrationsDir: `./${dir}/shared/infra/typeorm/migrations`,
    },
  },
  {
    name: 'mongo',
    type: 'mongodb',
    host: process.env.MONGODB_HOST,
    port: process.env.MONGODB_PORT,
    database: process.env.MONGODB_DB,
    useUnifiedTopology: true,
    entities: [`./${dir}/modules/**/infra/typeorm/schemas/*{.js,.ts}`],
  },
];
