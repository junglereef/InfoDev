const Product = require('../models/Product');
const { Category } = require("../models/Category");
// const Cart = require('../models/Cart');
const Order = require('../models/Order');


const ProdutosController = {
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
      // inserir o método aqui
      res.send("Lista de produtos (página)"); //  Rota administrativa 'admin/produtos'
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
      res.send("Criar produtos (página)"); // Rota administrativa 'admin/produtos/adicionar'
    } catch (error) {
      console.log(error);
    }
  },
  async editProductPage(req, res) {
    try {
      const { id } = req.params;
      // inserir o método aqui
      res.send("Editar produtos (página)"); // Rota administrativa 'admin/produtos/editar/id'
    } catch (error) {
      console.log(error);
    }
  },
  async saveProduct(req, res) {
    try {
        const {name, preco, description} = req.body
        const { filename } = req.file
        await Product.create({
            name,
            preco,
            description,
            image: filename
        })

        return res.redirect("admin/produtosAdmin");
    } catch (error) {
        console.log("aqui")
        return res.render("admin/cadastroProduto", {error: "Erro ao cadastrar produto."})
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
    try {
      const { id } = req.params;
      res.send("Apagar produtos  (ação)"); // usado pela rota DELETE [ sem renderização direta ]
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


module.exports = ProdutosController;
