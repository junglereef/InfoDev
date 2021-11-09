module.exports = (req, res, next) => {
  // obtem o user da session
  const { user } = req.session;
  // valida se existe um user
  if (typeof user != "undefined") {
    // existindo atribui ele a propriedade local (que permite acesso global)
    res.locals.user = user;
    // libera o acesso
    return next();
  }
  // não existindo redireciona para a pagina login
  return res.redirect("/login");
};
