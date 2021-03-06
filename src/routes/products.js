const express = require("express");
const router = express.Router();
const ProductController = require("../controller/ProductController");
const CategoryController = require("../controller/CategoryController");

const upload = require('../middlewares/upload');
const isLogin = require('../middlewares/isLogin');
const acessLevel = require("../middlewares/acessLevel");

// MAIN PRODUCT ROUTES [VIEWS]
router.get('/item/:id', ProductController.productPage);

//CATEGORY ROUTES
router.get("/categorias", CategoryController.listAll);

//Exportando Rotas
module.exports = router;
