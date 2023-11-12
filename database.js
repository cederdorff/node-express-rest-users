import mysql from "mysql2/promise"; // using mysql2 - installed npm library
import "dotenv/config";

// using the variables from the .env file
// and creates the connection to database
const db = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_PASSWORD,
    multipleStatements: true
});

// exports database connection
export default db;
