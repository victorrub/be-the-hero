import knex from "knex";
import * as config from "../../knexfile";

const env = process.env.NODE_ENV || "development";
const connect = knex(config[env]);

export default connect;
