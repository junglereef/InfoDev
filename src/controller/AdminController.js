const { User } = require("../models");
const AdminController = {
  dashboard: (req, res) => {
    res.render("admin/painel", { page: "Painel do usuário" });
  },
};

module.exports = AdminController;
