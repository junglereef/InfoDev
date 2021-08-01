const express = require("express");

const path = require("path");

const routes = express.Router();

routes.get('/home',(req,res) =>{
    res.redirect('/')
});
routes.get('/',(req,res) =>{
    res.sendFile(path.resolve("views", "home.html"));
});

routes.get('/carrinho',(req,res) => {
    res.sendFile(path.resolve("views","carrinho.html"));
});
routes.get('/checkout',(req,res) => {
    res.sendFile(path.resolve("views","checkout.html"));
});
routes.get('/contato',(req,res) => {
    res.sendFile(path.resolve("views","contato.html"));
});
routes.get('/listagem',(req,res) => {
    res.sendFile(path.resolve("views","listagem.html"));
});
routes.get('/painelUsuario',(req,res) => {
    res.sendFile(path.resolve("views","user.html"));
});
routes.get('/painelUsuario',(req,res) => {
    res.sendFile(path.resolve("views","produto.html"));
});
routes.get('/painelUsuario',(req,res) => {
    res.sendFile(path.resolve("views","login.html"));
});