const { User } = require("../models");
const AdminController = {
  dashboardPage: (req, res) => {
    res.render("admin/painel", { page: "Painel do Administrador" });
  },
  customerPage: (req, res) => {
    res.render("admin/cliente", { page: "Painel do usuário" });
  },
};

module.exports = AdminController;
