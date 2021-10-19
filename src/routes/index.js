const express = require('express');
const routes = express.Router();
const path = require("path");
const mainController = require("../controller/mainController");
routes.get("/home", mainController.index);
routes.get("/", mainController.index);
routes.get("/contato", mainController.contato);
routes.get("/carrinho", mainController.carrinho);
routes.get("/checkout", mainController.checkout);
routes.get("/login", mainController.login);
routes.get("/user", mainController.user);
routes.get("/user-panel", mainController.painel);
routes.get("/pedido-finalizado", mainController.telaConfirmacao);

module.exports = routes;
