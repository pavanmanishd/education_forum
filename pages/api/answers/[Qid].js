require('dotenv').config();
const mysql = require('mysql2');
const DATABASE_URL = process.env.DATABASE_URL
const connection = mysql.createConnection(DATABASE_URL);

export default function handler(req, res) {
    const Qid  = req.query.Qid;
    console.log(Qid);
    if (req.method === 'GET') {
        connection.query(
            `SELECT * FROM answers where Qid = '${Qid}' limit 10`,
            function (err, results, fields) {
                res.status(200).json(results)
            }
        )
    }
    else if (req.method === 'POST') {
        const { Aid, answer, username } = req.body;
        connection.query(
            'INSERT INTO answers (Qid, Aid, answer,username) VALUES (?,?, ?, ?)',
            [Qid, Aid, answer, username],
            function (err, results, fields) {
                res.status(200).json(results);
            }
        )
    }
    else if (req.method === 'PUT') {
        const { Aid, answer, username } = req.body;
        connection.query(
            'UPDATE answers SET answer = ? WHERE Aid = ?',
            [answer, Aid],
            function (err, results, fields) {
                res.status(200).json(results);
            }
        )
    }
    else if (req.method === 'DELETE') {
        const { Aid } = req.body;
        connection.query(
            'DELETE FROM answers WHERE Aid = ?',
            [Aid],
            function (err, results, fields) {
                res.status(200).json(results);
            }
        )
    }
    else {
        res.status(405).json({ message: 'We only support GET, POST, PUT, and DELETE' })
    }
}