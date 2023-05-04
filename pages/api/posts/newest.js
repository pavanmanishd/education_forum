require('dotenv').config();
const mysql = require('mysql2');
const DATABASE_URL = process.env.DATABASE_URL
const connection = mysql.createConnection(DATABASE_URL);

const hanleDisconnect = () => {
    connection.connect(function (err) {
        if (err) {
            console.log('error when connecting to db:', err);
            setTimeout(hanleDisconnect, 2000);
        }
    });
}

connection.on('error', function (err) {
    console.log('db error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        hanleDisconnect();
    } else {
        throw err;
    }
});

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