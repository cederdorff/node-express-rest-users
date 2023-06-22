import mysql from "mysql2"; // using mysql2 - an install npm library

// using the variables from the .env file
// and creates the connection to database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "users",
    password: "database",
    multipleStatements: true
});

// exports database connection
export default connection;
