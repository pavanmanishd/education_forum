require('dotenv').config();
const mysql = require('mysql2');
const DATABASE_URL = process.env.DATABASE_URL
const connection = mysql.createConnection(DATABASE_URL);

export default function handler(req, res) {
    connection.query(
        `SELECT * FROM questions where Qid = '${req.query.Qid}'`,
        function (err, results, fields) {
            res.status(200).json(results[0])
        }
    )
}
