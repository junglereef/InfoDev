const ProdutosController = {
  productPage(req, res) {
    res.render("Produto", { page: "Página Produto" }); // Rota de usuario
  },
  productsListPage(req, res) {
    res.send("Lista de produtos (página)"); // Rota de usuario
  },
  productsListAdminPage(req, res) {
    res.send("Lista de produtos (página)"); //  Rota administrativa 'admin/produtos'
  },
  productAdminPage(req, res) {
    res.render("Produto", { page: "Página Produto" }); // Rota administrativa 'admin/produtos/id'
  },
  createProductPage(req, res) {
    res.send("Criar produtos (página)"); // Rota administrativa 'admin/produtos/adicionar'
  },
  editProductPage(req, res) {
    res.send("Editar produtos (página)"); // Rota administrativa 'admin/produtos/editar'
  },
  categoryProductPage(req, res) {
    res.render("categorias", { page: "Categorias" }); // Rota administrativa 'admin/produtos/categorias'
  },
  async editProduct(req, res) {
    res.send("Editar produtos  (ação)"); // usado pela rota PUT [ sem renderização direta ]
  },
  async createProduct(req, res) {
    res.send("Criar produtos (ação)"); // usado pela rota POST [ sem renderização direta ]
  },
  async deleteProduct(req, res) {
    res.send("Apagar produtos  (ação)"); // usado pela rota DELETE [ sem renderização direta ]
  },
};

module.exports = ProdutosController;
