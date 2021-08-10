const express = require("express");
const routes = express.Router();
const produtosController = require('../controller/produtosController');

routes.get('/', produtosController.index);

routes.get("/lista", produtosController.lista);

routes.get("/criar", produtosController.criar);

routes.get("/cancelar", produtosController.cancelar);

routes.get("/categoria", produtosController.categoria);

/*routes.get("/:id", produtosController.id);*/

module.exports = routes;