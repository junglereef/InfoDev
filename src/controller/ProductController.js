const {Product, Category}  = require("../models")


const ProductsController = {
  async productPage(req, res) {
    try {
      const { id } = req.params;
      // inserir o método aqui
      res.render("Produto", { page: "Página Produto" }); // Rota de usuario
    } catch (error) {
      console.log(error);
    }
  },
  async productsListPage(req, res) {
    try {
      // inserir o método aqui
      res.send("Lista de produtos (página)"); // Rota de usuario
    } catch (error) {
      console.log(error);
    }
  },
  async productsListAdminPage(req, res) {
    try {
      const products = await Product.findAll({
        
          order: [["createdAt", "DESC"]],
      });
      // console.log(products);
     
      res.render("admin/listProduct", { page: "Lista de Produtos",  product:products }); //  Rota administrativa 'admin/produtos'
    } catch (error) {
      console.log(error);
    }
  },
  async productAdminPage(req, res) {
    try {
      const { id } = req.params;
      // inserir o método aqui
      res.render("Produto", { page: "Página Produto" }); // Rota administrativa 'admin/produtos/id'
    } catch (error) {
      console.log(error);
    }
  },
  async createProductPage(req, res) {
    try {
      // inserir o método aqui
      res.render("admin/createProduct",  { page: "Criar Produtos"}); // Rota administrativa 'admin/produtos/adicionar'
    } catch (error) {
      console.log(error);
    }
  },
  async editProductPage(req, res) {
    try {
      const { id } = req.params;
      // inserir o método aqui
      res.render("admin/updateProduct",  { page: "Atualização Produtos"});// Rota administrativa 'admin/produtos/editar/id'
    } catch (error) {
      console.log(error);
    }
  },
  async saveProduct(req, res) {
    try {
      const {name, unit_price,  offer_price, description} = req.body
        const { filename } = req.file
        await Product.create({
            name,
            unit_price,
            offer_price,
            description,
            image: filename
        })

        return res.redirect("/admin/painel");
    } catch (error) {
        console.log("aqui")
        return res.send("error")
    }
},
  async categoriesProductPage(req, res) {
    try {
      // inserir o método aqui
      res.render("categorias", { page: "Categorias" }); // Rota administrativa 'admin/produtos/categorias'
    } catch (error) {
      console.log(error);
    }
  },
  async editProduct(req, res) {
    try {
      const { id } = req.params;
      // inserir o método aqui
      res.send("Editar produtos  (ação)"); // usado pela rota PUT [ sem renderização direta ]
    } catch (error) {
      console.log(error);
    }
  },
  async createProduct(req, res) {
    try {
      res.send("Criar produtos (ação)"); // usado pela rota POST [ sem renderização direta ]
    } catch (error) {
      console.log(error);
    }
  },
  async deleteProduct(req, res) {
    try { const productDeleted = await Product.destroy({
      where: {
          id: req.params.id
      }
  })

  if(!productDeleted)
      return res.render("/produtos", {error: "Produto não deletado.Tente Novamente", produtos: await Product.findAll()})
  return res.redirect("/produtos") // usado pela rota DELETE [ sem renderização direta ]
    } catch (error) {
      console.log(error);
    }
  },
  async category(req,res){
    try{
        const {name} = req.body;

        const category = await Category.create({
            name
        })
        
        res.redirect("/cadastroCategoria")
        
    }catch(err){
        console.log(err)
        return res.redirect
    }
},

async delete(req,res) {
  const {name} = req.body;
  Category.destroy({ where: { name }});
 },

};


module.exports = ProductsController;
