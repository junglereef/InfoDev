const express = require("express");
const router = express.Router();
const ProductController = require("../controller/ProductController");
const upload = require('../middlewares/upload');
const isLogin = require('../middlewares/isLogin');
const acessLevel = require("../middlewares/acessLevel");

// MAIN PRODUCT ROUTES [VIEWS]
// router.get("/:id", ProductController.productPage);
router.get('/', ProductController.productsListPage);

//CATEGORY ROUTES
router.get("/categorias", ProductController.categoriesProductPage);
// router.get("/criar", isLogin,ProdutosController.createProductPage);
// router.get("/categorias", isLogin,ProdutosController.categoriesProductPage);

//POST ROUTES
// router.post('/criar-produto', isLogin, upload.single("image"), ProductController.createProduct);
router.post("/cadastarCategoria", isLogin,ProductController.category)
router.post("/deletarCategoria", isLogin, ProductController.delete)
router.post('/salvar-produto', isLogin, upload.single("image"), ProductController.saveProduct);


//DELETE ROUTES
router.delete('/deletar-produto/:id', isLogin, ProductController.deleteProduct);

//PUT ROUTES
router.put('/salvar-edicao-produto/:id', isLogin, upload.single("image"), ProductController.editProduct);


//Exportando Rotas
module.exports = router;
