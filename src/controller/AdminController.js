const { User } = require("../models");
const AdminController = {
    
  painel: (req, res) => {
    res.render("admin/painel", { page: "Painel do usuário" });
  },

}

module.exports =  AdminController;