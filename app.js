const express = require ('express');
const app = express();
/*const rotasDeProdutos = require("./routes/produtos")*/
const rotas = require("./routes")

app.use(express.json());/*Adicionado do print de aula 27072021*/
app.use(express.urlencoded({extended: false}));/*Adicionado do print de aula 27072021*/
app.use(express.static('public'));

app.use(rotas);
/*app.use('/produtos', rotasDeProdutos);*/

app.listen(3000,()=>{
    console.log('servidor rodando');
})
