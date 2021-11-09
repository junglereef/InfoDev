const express = require("express");
const router = express.Router();
const produtosController = require("../controller/ProductController");
// Definindo rotas
router.get("/", produtosController.index);
router.get("/lista", produtosController.lista);
router.get("/criar", produtosController.criar);
router.get("/cancelar", produtosController.cancelar);
router.get("/categorias", produtosController.categorias);

//Exportando Rotas
module.exports = router;
