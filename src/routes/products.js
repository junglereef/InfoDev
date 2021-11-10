const express = require("express");
const router = express.Router();
const ProductController = require("../controller/ProductController");

// DEFININDO ROTAS PRINCIPAIS DE PRODUTO [VIEWS]
router.get("/", ProductController.productsListPage);
router.get("/categorias", ProductController.categoriesProductPage);
router.get("/:id", ProductController.productPage);

//Exportando Rotas
module.exports = router;
