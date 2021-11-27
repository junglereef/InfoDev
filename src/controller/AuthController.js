const { User } = require("../models");
const crypto = require("../helpers/crypto");

const AuthController = {
  showLogin(req, res) {
    return res.render("auth/login", { page: "Faça o Login - Infodev" });
  },
  showRegister(req, res) {
    return res.render("auth/cadastro", { page: "Cadastre-se - Infodev" });
  },
  // Função Assincrona
  async register(req, res) {
    try {
      const { name, email, password } = req.body;
      const hash = crypto.create(password);
      const user = await User.create({
        name,
        email,
        password: hash,
        user_type: 0,
        // username,
        // avatar: "link",
        create_at: new Date().toISOString(),
      });

      return res.redirect("/login");
    } catch (err) {
      console.log(err);
      return res.redirect("/cadastro");
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user || !crypto.validate(password, user.password)) {
        return res.render("auth/login", {
          error: "Usuario ou Senha inválidos",
        });
      }

      req.session.user = {
        id: user.id,
        name: user.name,
      };

      if (user.user_type) {
        req.session.user.admin = true;
      }

      return res.redirect("/admin");
    } catch (error) {
      console.log(error);
      return res.render("auth/login", {
        error: "sistema indisponivel tente novamente!",
      });
    }
  },
};

module.exports = AuthController;
