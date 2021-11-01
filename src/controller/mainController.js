const { User } = require("../models");
const mainController = {
  index: (req, res) => {
    res.render("home", { page: "Infodev - Loja de Eletrônicos" });
  },
  cart: (req, res) => {
    res.render("cart", { page: "Carrinho" });
  },
  checkout: (req, res) => {
    res.render("checkout", { page: "Finalizar Compra" });
  },
  contato: (req, res) => {
    res.render("contato", { page: "Contato" });
  },

  produto: (req, res) => {
    res.render("produto", { page: "Produto" });
  },
  user: (req, res) => {
    res.render("user", { page: "Minha Conta" });
  },

  telaConfirmacao: (req, res) => {
    res.render("pedido-finalizado", { page: "Pedido finalizado" });
  },
};

module.exports = mainController;

// async function criar(name, email) {

//   const post = await User.create({
//     name: "Atila",
//     email: "atila@atila.com",
//     password: "welcome",
//     user_type: 0,
    
//   });
//   return console.log(post)
// }

// criar ()

