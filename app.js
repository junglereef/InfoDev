const express = require ('express');
const path = require('path');
const app = express();
const rotas = require('./src/routes')
const rotasDeProdutos = require('./src/routes/produtos')

app.set('view engine', 'ejs');
app.set('views', path.resolve ('./src/views'));

app.use(express.static("public"));

app.use(rotas);
app.use('/produtos', rotasDeProdutos);
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.json());/*Adicionado do print de aula 27072021*/
app.use(express.urlencoded({extended: false}));/*Adicionado do print de aula 27072021*/


app.listen(3000,()=>{
    console.log('servidor rodando');
})
