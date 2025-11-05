// db.ts
import knex, { Knex } from "knex";
import config from "../../knexfile";
import logger from "../utils/logger";

const environment = process.env.NODE_ENV || "development";
const environmentConfig: Knex.Config = config[environment];

if (!environmentConfig) {
  throw new Error(
    `Knex configuration for environment '${environment}' not found.`
  );
}

// Ensure knex is a singleton in serverless
let knexDb: Knex;

if (!(global as any).knexDb) {
  (global as any).knexDb = knex(environmentConfig);
  logger.info("Knex instance created (lazy connection).");
}

knexDb = (global as any).knexDb;

// Utility function to safely test DB connection
export const testConnection = async () => {
  try {
    await knexDb.raw("SELECT 1");
    logger.info("Database connected successfully.");
  } catch (err) {
    logger.error(`Failed to connect to the database: ${err}`);
  }
};

export const raw = async ({ query }: { query: string }) => {
  return (await knexDb.raw(query)).rows;
};

export default knexDb;
