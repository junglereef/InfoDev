const { Form, Product } = require("../models");
const MainController = {
  async indexPage(req, res) {
    try {
      const products = await Product.findAll()
      res.render("home", { page: "Infodev - Loja de Eletrônicos", products });
    } catch (error) {
      console.log(error);
    }
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
