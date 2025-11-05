import { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      host: "HOST-DB",
      port: 26182,
      user: "USERNAME",
      password: "PASSWORD",
      database: "defaultdb",
      ssl: {
        rejectUnauthorized: false,
      },
    },
    migrations: { directory: "./migrations" },
    pool: {
      min: 0,
      max: 1,
      acquireTimeoutMillis: 10000,
      idleTimeoutMillis: 30000,
    },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: { directory: "./migrations" },
    pool: {
      min: 0,
      max: 1,
      acquireTimeoutMillis: 10000,
      idleTimeoutMillis: 30000,
    },
  },
};

export default config;
