const { User } = require("../models");

const UserController = {

  async customerPage (req, res) {
    try {
    res.render("clients/painel-cliente", { page: "Painel do usuário" });
  } catch (error) {
    console.log(error);
  }
  },

  async viewAllPage(req, res) {
    try {
    } catch (error) {
      console.log(error);
    }
  },
  async detailPage(req, res) {
    try {
    } catch (error) {
      console.log(error);
    }
  },
  createPage(req, res) {
    //Apenas exibira á pagina de criação de usuário não sendo necessário por hora consulta direta ao DB
  },
  async listAll(req, res) {
    try {
    } catch (error) {
      console.log(error);
    }
  },
  async create(req, res) {
    try {
    } catch (error) {
      console.log(error);
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
    } catch (error) {
      console.log(error);
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = UserController;
