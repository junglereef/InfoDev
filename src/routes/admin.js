const express = require("express");
const router = express.Router();
const AdminController = require("../controller/AdminController");
const isLogin = require("../middlewares/isLogin");
const acessLevel = require("../middlewares/acessLevel");

// router.use(isLogin); // Habilita verificação de login
router.use(acessLevel);

// ROTAS PAINEL [PRINCIPAL]
router.get("/painel", isLogin, acessLevel, AdminController.dashboardPage);


//// DEFININDO ROTAS [VIEWS] PRODUTOS


module.exports = router;
