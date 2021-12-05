const express = require("express");
const router = express.Router();
const AuthController = require("../controller/AuthController");

// ROTAS [VIEWS]
router.get("/login", AuthController.showLogin); // exibe a página de login
router.get("/cadastro", AuthController.showRegister); // exibe a página de cadastro
router.get("/logout", AuthController.showLogout);

//ROTAS [AÇÕES]
router.post("/login", AuthController.login); // Executa a ação de login do usuário
router.post("/cadastro", AuthController.register); // Executa a ação de registro do usuário

module.exports = router;
