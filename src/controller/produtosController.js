const produtosController = {
  index: (req, res) => {
    res.render("Produto", { page: "Página Produto"});
  },

  lista: (req, res) => {
    res.send("Lista de produtos");
  },
  criar: (req, res) => {
    res.send("Criar produtos");
  },
  cancelar: (req, res) => {
    res.send("Apagar produtos");
  },
  departamentos: (req, res) => {
    res.render("departamentos", { page: "Departamentos" });
  },
};

module.exports = produtosController;
