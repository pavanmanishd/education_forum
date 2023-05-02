require('dotenv').config();
const mysql = require('mysql2');
const DATABASE_URL = process.env.DATABASE_URL
const connection = mysql.createConnection(DATABASE_URL);

export default function handler(req, res) {
    if(req.method === 'GET') {
        connection.query(
            'SELECT * FROM questions limit 10',
            function(err, results, fields) {
                res.status(200).json(results)
            }
        )
    }
}        