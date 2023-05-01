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
    else if(req.method === 'POST') {
        const { qid,question,username } = req.body;
        connection.query(
            'INSERT INTO questions (Qid, question,username) VALUES (?, ?, ?)',
            [qid, question, username],
            function(err, results, fields) {
                res.status(200).json(results)
            }
        )
    }
    else if(req.method === 'PUT') {
        const { qid,question,username } = req.body;
        connection.query(
            'UPDATE questions SET question = ? WHERE Qid = ?',
            [question, qid],
            function(err, results, fields) {
                res.status(200).json(results)
            }
        )
    }
    else if(req.method === 'DELETE') {
        const { qid } = req.body;
        connection.query(
            'DELETE FROM questions WHERE Qid = ?',
            [qid],
            function(err, results, fields) {
                res.status(200).json(results)
            }
        )
    }
    else {
        res.status(405).json({message: 'We only support GET, POST, PUT, and DELETE'})
    }
}