import mysql from "mysql2"; // using mysql2 - an install npm library
import "dotenv/config";

// using the variables from the .env file
// and creates the connection to database
const connection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.MYSQL_USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    multipleStatements: true
});

// exports database connection
export default connection;
