const express = require('express');
const routes = express.Router();
const path = require("path");
const AdminController = require('../controller/AdminController');
const isLogin = require("../middlewares/isLogin");


routes.get("/", isLogin,AdminController.painel);


module.exports = routes;