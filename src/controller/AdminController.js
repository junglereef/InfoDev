const { User } = require("../models");
const AdminController = {
  async dashboardPage (req, res)  {
    try {
    res.render("admin/painel", { page: "Painel do Administrador" });
  } catch (error) {
    return res.redirect("/")
    console.log(error);
  }
  },

};

module.exports = AdminController;
