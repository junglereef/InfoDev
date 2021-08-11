const produtosController = {
  index: (req, res) => {
    res.send("Produtos");
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
  categoria: (req, res) => {
    res.render("categoria", { page: "Categoria" });
  },
};

module.exports = produtosController;
