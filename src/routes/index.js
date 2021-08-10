const { Router } = require("express");
const express = require("express");
const path = require("path");
const routes = express.Router();
const mainController = require('../controller/mainController');


routes.get('/home',mainController.index);


routes.get('/', mainController.index);

routes.get('/contato', mainController.contato);

/*routes.get('/lista', mainController.lista);*/

routes.get('/carrinho', mainController.carrinho);

routes.get('/checkout', mainController.checkout);

routes.get('/login', mainController.login);

/*routes.get('/produto', mainController.produto);*/

routes.get('/user', mainController.user);

module.exports = routes;