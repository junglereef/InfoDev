const { User } = require("../models");
const bcrypt = require("bcryptjs");

const authController = {
  
  showLogin(req, res) {
    return res.render("auth/login", { page: "Faça o Login - Infodev" } );
  },
  showRegister(req, res) {
    return res.render("auth/register",  { page: "Cadastre-se - Infodev" }  );
  },
  // Função Assincrona
  async register(req, res) {
    try {
      const { name, email, password } = req.body;
      const hash = bcrypt.hashSync(password, 10);
      const user = await User.create({
        name,
        email,
        password: hash,
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

      if (!user || !bcrypt.compareSync(password, user.password )) {
        return res.render("auth/login", { error: "Usuario ou Senha inválidos"});
      }
     

      Object.assign(req.session, {
        user: {
          id: user.id,
          name: user.name,
        },
      });

     if (user.user_type) {
       req.session.user.admin=true
       
     }
     
     
      return res.redirect("/home");

    } catch (error) {
      console.log(error);
      return res.render('auth/login', {
        error: "sistema indisponivel tente novamente!",
      });
    }
  },
};

module.exports = authController;
