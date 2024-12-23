import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export const db = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.URL_DB,
        database: process.env.POSTGRES,
        ssl: false
    },
});
