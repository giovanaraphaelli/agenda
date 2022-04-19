const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/connection');
const port = 8000;

let app = express();
app.use(bodyParser.json());

app.get('/contatos', (req, res)=>{
    let cmd_selectAll = 'SELECT * FROM CONTATO';
    db.query(cmd_selectAll, (err, rows)=>{
        res.status(200).json(rows);
    });
});

app.listen(port, ()=>{
    console.log("Projeto Executando na porta: " + port);
})