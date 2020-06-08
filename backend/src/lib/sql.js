import mysql from "mysql";

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "whdgnsqkqh",
  database: "hey_doc",
});

connection.connect();
export default connection;
