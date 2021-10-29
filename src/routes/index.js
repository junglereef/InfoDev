const express = require('express');
const routes = express.Router();
const path = require("path");
const isLogin = require("../middlewares/isLogin");
const mainController = require("../controller/mainController");
const authController = require("../controller/Auth");

// routes.get("/", authController.showLogin);
routes.get("/login", authController.showLogin);
routes.post("/login", authController.login);
routes.get("/cadastro", authController.showRegister);
routes.post("/cadastro", authController.register);


routes.get("/home", mainController.index);
routes.get("/", mainController.index);
routes.get("/contato", mainController.contato);
routes.get("/carrinho", mainController.carrinho);
routes.get("/checkout", mainController.checkout);
routes.get("/pedido-finalizado", mainController.telaConfirmacao);

module.exports = routes;
