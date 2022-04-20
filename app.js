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

app.post('/contatos', (req, res)=>{
    let dados = req.body;
    let cmd_insert = 'INSERT INTO CONTATO SET ?';
    db.query(cmd_insert,dados,(error, result)=>{
        if(error){
            res.status(400).json({message:"Erro: " + error});
        }else{
            res.status(201).json({message: result.insertID + " - Contato salvo!"});
        }
    });
});

app.listen(port, ()=>{
    console.log("Projeto Executando na porta: " + port);
})