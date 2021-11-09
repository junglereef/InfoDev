const express = require("express");
const router = express.Router();
const MainController = require("../controller/MainController");

//DEFININDO ROTAS PRINCIPAIS [VIEWS] DO SUSUARIO
router.get("/", MainController.indexPage);
router.get("/contato", MainController.contactPage);
router.get("/cart", MainController.cartPage);
router.get("/checkout", MainController.checkoutPage);
router.get("/pedido-finalizado", MainController.orderConfirmation);

// DEFINDO ROTAS DE REDIRECIONAMENTO
router.get("/login", MainController.loginRedirect);
router.get("/cadastre-se", MainController.registerRedirect);

module.exports = router;
