const express = require("express");
const router = express.Router();
const AdminController = require("../controller/AdminController");
const ProdutosController = require("../controller/ProductController");
const isLogin = require("../middlewares/isLogin");
const acessLevel = require("../middlewares/acessLevel");

// router.use(isLogin); // Habilita verificação de login
// router.use(acessLevel);

// ROTA PAINEL [PRINCIPAL]
routerget("/", AdminController.dashboardPage);

//// DEFININDO ROTAS [VIEWS] PRODUTOS
router.get("/criar", ProdutosControllerAdmin.createProductPage);
router.get("/categorias", ProdutosController.categoryProductPage);

module.exports = router;
