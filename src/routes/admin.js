const express = require("express");
const router = express.Router();
const AdminController = require("../controller/AdminController");
const ProductController = require("../controller/ProductController");
// const acessLevel = require("../middlewares/acessLevel");
// const isLogin = require("../middlewares/isLogin");
const upload = require('../middlewares/upload');

// router.use(isLogin); // Habilita verificação de login
// router.use(acessLevel);

// ROTAS PAINEL [PRINCIPAL]
router.get("/", /*isLogin, acessLevel,*/ AdminController.dashboardPage);


// BACKEND PRODUCTS 
router.get('/criar-produtos', /*isLogin, acessLevel,*/ ProductController.createProductPage);
router.get("/lista-produtos", /*isLogin, acessLevel,*/ ProductController.productsListAdminPage);
router.post('/salvar-produto', /*isLogin, acessLevel,*/ upload.single("image"), ProductController.saveProduct);
router.get("/editar-produto/", /*isLogin, acessLevel,*/ ProductController.editProductPage);
router.post("/editar-produto/:id", /*isLogin, acessLevel,*/ ProductController.editProductPage);

//PUT ROUTES
router.put('/editar-produto/:id', /*isLogin, acessLevel,*/upload.single("image"), ProductController.editProduct);
//DELETE ROUTES
router.delete('/deletar-produto/:id', /*isLogin, acessLevel,*/ ProductController.deleteProduct);


module.exports = router;
