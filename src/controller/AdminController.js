const { User } = require("../models");
const AdminController = {
    
  painel: (req, res) => {
    res.render("admin/painel-usuario", { page: "Painel do usuário" });
  },

}

module.exports =  AdminController;