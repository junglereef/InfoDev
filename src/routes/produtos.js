const express = require("express");
const routes = express.Router();
const produtosController = require("../controller/produtosController");
// Definindo rotas
routes.get("/produto", produtosController.index);
routes.get("/lista", produtosController.lista);
routes.get("/criar", produtosController.criar);
routes.get("/cancelar", produtosController.cancelar);
routes.get("/departamentos", produtosController.departamentos);

//Exportando Rotas
module.exports = routes;
