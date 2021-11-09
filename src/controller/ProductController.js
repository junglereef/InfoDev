const produtosController = {
  productPage(req, res) {
    res.render("Produto", { page: "Página Produto" });
  },
  productsListPage(req, res) {
    res.send("Lista de produtos (página)");
  },
  createProductPage(req, res) {
    res.send("Criar produtos (página)");
  },
  editProductPage(req, res) {
    res.send("Editar produtos (página)");
  },
  categoryProductPage(req, res) {
    res.render("categorias", { page: "Categorias" });
  },
  async editProduct(req, res) {
    res.send("Editar produtos  (ação)"); // usado pela rota PUT
  },
  async createProduct(req, res) {
    res.send("Criar produtos (ação)"); // usado pela rota POST
  },
  async deleteProduct(req, res) {
    res.send("Apagar produtos  (ação)"); // usado pela rota DELETE
  },
};

module.exports = produtosController;
