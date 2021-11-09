const express = require("express");
const router = express.Router();
const AuthController = require("../controller/AuthController");

// ROTAS [VIEWS]
router.get("/login", AuthController.showLogin);
router.get("/cadastre-se", AuthController.showRegister);

//ROTAS [AÇÕES]
router.post("/login", AuthController.login);
router.post("/cadastre-se", AuthController.register);
