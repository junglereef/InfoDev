const { Form, Product } = require("../models");
const MainController = {
  async indexPage(req, res) {
    try {
      const productCard = await Product.findAll();
      res.render("home", { page: "Infodev - Loja de Eletrônicos", product:productCard });
    } catch (error) {
      console.log(error);
      return res.render("home", {error: "Erro ao carregar produtos"})
    }
  },
  cartPage: (req, res) => {
    res.render("cart/carrinho", { page: "Carrinho" });
  },
  checkoutPage: (req, res) => {
    res.render("cart/checkout", { page: "Finalizar Compra" });
  },
  orderConfirmation: (req, res) => {
    res.render("cart/pedido-finalizado", { page: "Pedido finalizado" });
  },
  accountPage: (req, res) => {
    res.render("user", { page: "Minha Conta" });
  },
  sobrePage: (req, res) => {
    res.render("sobre", { page: "Sobre Nós" });
  },
  newsPage: (req, res) => {
    res.render("news", { page: "Noticias" });
  },
  
  contactPage: (req, res) => {
    res.render("contato", { page: "Contato" });
  },
  loginRedirect(req, res) {
    res.redirect("/auth/login"); // redirecionara para a pagina de login através da rota auth
  },
  registerRedirect(req, res) {
    res.redirect("/auth/cadastro"); // redirecionara para a pagina de cadastro através da rota auth
  },
  async sendForm(req, res) {
    const { name, email, message } = req.body;

    const resultado = await Form.create({
      name,
      email,
      message,
    });

    console.log(resultado);
    return res.redirect("/");
  },
};

module.exports = MainController;
