require('dotenv').config();
const mysql = require('mysql2');
const DATABASE_URL = process.env.DATABASE_URL
const connection = mysql.createConnection(DATABASE_URL);

export default function handler(req, res) {
    if(req.method === 'POST') {
        const { Qid,Aid,answer,username } = req.body;
        connection.query(
            'INSERT INTO comments (Qid,Aid,answer,username) VALUES (?,?, ?, ?)',
            [Qid, Aid, answer, username],
            function(err, results, fields) {
                res.status(200).json(results)
            }
        )
    }
}