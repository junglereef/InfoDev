const MainController = {
  indexPage: (req, res) => {
    res.render("home", { page: "Infodev - Loja de Eletrônicos" });
  },
  cartPage: (req, res) => {
    res.render("cart", { page: "Carrinho" });
  },
  checkoutPage: (req, res) => {
    res.render("checkout", { page: "Finalizar Compra" });
  },
  orderConfirmation: (req, res) => {
    res.render("pedido-finalizado", { page: "Pedido finalizado" });
  },
  accountPage: (req, res) => {
    res.render("user", { page: "Minha Conta" });
  },
  contactPage: (req, res) => {
    res.render("contato", { page: "Contato" });
  },
  loginRedirect(req, res) {
    res.redirect("/auth/login"); // redirecionara para a pagina de login através da rota auth
  },
  registerRedirect(req, res) {
    res.redirect("/auth/cadastre-se"); // redirecionara para a pagina de cadastro através da rota auth
  },
};

module.exports = MainController;
