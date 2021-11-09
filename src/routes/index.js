const express = require("express");
const router = express.Router();
const MainController = require("../controller/MainController");


//DEFININDO ROTAS PRINCIPAIS [VIEWS] USUARIO
router.get("/", MainController.index);
router.get("/contato", MainController.contato);
router.get("/cart", MainController.cart);
router.get("/checkout", MainController.checkout);
router.get("/pedido-finalizado", MainController.telaConfirmacao);

module.exports = router;
