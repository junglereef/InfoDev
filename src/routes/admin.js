const express = require("express");
const router = express.Router();
const AdminController = require("../controller/AdminController");
const ProductController = require("../controller/ProductController");
const acessLevel = require("../middlewares/acessLevel");
const isLogin = require("../middlewares/isLogin");

// router.use(isLogin); // Habilita verificação de login
router.use(acessLevel);

// ROTAS PAINEL [PRINCIPAL]
router.get("/", isLogin, acessLevel, AdminController.dashboardPage);



// BACKEND PRODUCTS 
// router.get("/editar-produto/:id ", /*isLogin, acessLevel,*/ProductController.editProductPage);
router.get("/editar-produto/:id ", isLogin, acessLevel,ProductController.editProductPage);
router.get("/lista-produtos", isLogin, acessLevel, ProductController.productsListAdminPage);
router.get('/criar-produtos', isLogin, acessLevel, ProductController.createProductPage);



module.exports = router;
