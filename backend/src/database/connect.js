import knex from "knex";
import * as config from "../../knexfile";

const connect = knex(config.development);

export default connect;
