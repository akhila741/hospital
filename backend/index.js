const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

dbconfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hospital'
}
const pool = mysql.createPool(dbconfig)

app.get('/appoint',(req,res) => {
    pool.query('select *from appointments', (err, rows) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(rows)
            res.send(rows)
        }
    })
})

app.get('/doctor',(req,res) => {
    pool.query('select *from doctors', (err, rows) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(rows)
            res.send(rows)
        }
    })
})

app.get('/service',(req,res) => {
    pool.query('select *from service', (err, rows) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(rows)
            res.send(rows)
        }
    })
})

app.listen(1000, () => {
    console.log('Running on port 1000')
})