const express = require("express");
const router = express.Router();
const AdminController = require("../controller/AdminController");
const isLogin = require("../middlewares/isLogin");

router.use(isLogin);
routerget("/", AdminController.dashboard);

module.exports = router;
