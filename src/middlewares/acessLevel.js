module.exports = (req, res, next) => {
  //obtem o user da session
  const { user } = req.session;
  //verifica o previlégio de adm
  if (user.admin) {
    //atribui a propriedade local
    res.locals.user = user;
    //libera o acesso
    return next();
  }
  //caso não tenha prevlégio de adm redireciona para a home
  return res.redirect("/");
};
