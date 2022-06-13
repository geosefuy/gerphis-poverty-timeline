import express from 'express';
import bodyParser from 'body-parser';
import sqlite3 from 'sqlite3';
import cors from 'cors';

const db = new sqlite3.Database('./info.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
    console.log("Connection successful")
})
const PORT = 8080;

// db.run('CREATE TABLE timeline')

// const sql = "";
// db.all(sql, [], (err, rows) => {
//     if (err) return console.error(err.message);

//     rows.forEach((row) => {
//         console.log(row);
//     })
// })

// db.close()

const app = express();
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    
})

app.listen(PORT, () => (console.log("Running on http://localhost:" + PORT)))

