const express = require ('express');
const path = require("path");
const app = express();
/*const rotasDeProdutos = require("./routes/produtos")*/
const rotas = require('./src/routes')
/*app.use('/produtos', rotasDeProdutos);*/
app.use(rotas);

app.use(express.json());/*Adicionado do print de aula 27072021*/
app.use(express.urlencoded({extended: false}));/*Adicionado do print de aula 27072021*/
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.resolve ('views'));

app.listen(3000,()=>{
    console.log('servidor rodando');
})
