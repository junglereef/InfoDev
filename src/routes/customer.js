const express = require("express");
const router = express.Router();
const AdminController = require("../controller/AdminController");
const ProdutosController = require("../controller/ProductController");
const isLogin = require("../middlewares/isLogin");
const acessLevel = require("../middlewares/acessLevel");

// router.use(isLogin); // Habilita verificação de login
// router.use(acessLevel);

// ROTA PAINEL [PRINCIPAL]
router.get("/", isLogin,AdminController.dashboardPage);


//// DEFININDO ROTAS [VIEWS] PRODUTOS
router.get("/criar", isLogin,ProdutosController.createProductPage);
router.get("/categorias", isLogin,ProdutosController.categoriesProductPage);

module.exports = router;
