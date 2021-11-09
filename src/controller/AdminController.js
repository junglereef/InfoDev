const { User } = require("../models");
const AdminController = {
  dashboardPage: (req, res) => {
    res.render("admin/painel", { page: "Painel do usuário" });
  },
};

module.exports = AdminController;
