import pg from "pg";

const pool = new pg.Pool({
  user: "postgres",
  password: "12345678",
  host: "localhost",
  port: "5432",
  database: "carcasson",
});


export default pool;
