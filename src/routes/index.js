const express = require("express");
const router = express.Router();
const mainController = require("../controller/MainController");
const authController = require("../controller/AuthController");

// router.get("/", authController.showLogin);
router.get("/login", authController.showLogin);
router.post("/login", authController.login);
router.get("/cadastro", authController.showRegister);
router.post("/cadastro", authController.register);

router.get("/home", mainController.index);
router.get("/", mainController.index);
router.get("/contato", mainController.contato);
router.get("/cart", mainController.cart);
router.get("/checkout", mainController.checkout);
router.get("/pedido-finalizado", mainController.telaConfirmacao);

module.exports = router;
