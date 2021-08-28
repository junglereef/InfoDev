const mainController = {
  index: (req, res) => {
    res.render("home", { page: "Infodev - Loja de Eletrônicos" });
  },
  carrinho: (req, res) => {
    res.render("carrinho", { page: "Carrinho" });
  },
  checkout: (req, res) => {
    res.render("checkout", { page: "Finalizar Compra" });
  },
  contato: (req, res) => {
    res.render("contato", { page: "Contato" });
  },
  login: (req, res) => {
    res.render("login", { page: "Entre ou Cadastre-se" });
  },
  produto: (req, res) => {
    res.render("produto", { page: "Produto" });
  },
  user: (req, res) => {
    res.render("user", { page: "Minha Conta" });
  },
  painel: (req, res) => {
    res.render("painel-usuario", { page: "Painel do usuário"});
  },
  telaConfirmacao: (req, res) => {
    res.render("pedido-finalizado", { page: "Pedido finalizado"});
  },
};

module.exports = mainController;
