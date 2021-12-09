const express = require("express");
const router = express.Router();
const MainController = require("../controller/MainController");

//DEFININDO ROTAS PRINCIPAIS [VIEWS] DO USUARIO
router.get("/", MainController.indexPage);
router.get("/contato", MainController.contactPage);
router.get("/sobre", MainController.sobrePage);
router.get("/noticias", MainController.newsPage);
router.get("/cart/carrinho", MainController.cartPage);
router.get("/cart/checkout", MainController.checkoutPage);
router.get("/cart/pedido-finalizado", MainController.orderConfirmation);

// DEFINDO ROTAS DE REDIRECIONAMENTO
router.get("/login", MainController.loginRedirect);
router.get("/cadastre-se", MainController.registerRedirect);
router.post("/sendForm", MainController.sendForm );

module.exports = router;

