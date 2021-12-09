
const {Product}  = require("../models")
const Sequelize = require('sequelize');
const { render } = require("ejs");


const ProductsController = {
  
  async productsListAdminPage(req, res) {
    try {
      const products = await Product.findAll();
     
      return res.render("admin/listProduct", { page: "Lista de Produtos",  product:products }); //  Rota administrativa 'admin/produtos'
    } catch (error) {
      return res.render("admin", {error: "Erro ao carregar produtos"})
    }
  },
  createProductPage(req, res) {
      res.render("admin/createProduct", { page: "Criar Produtos"}); // Rota administrativa 
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

        return res.redirect("/admin/lista-produtos");
    } catch (error) {
        console.log("aqui")
        return res.render("admin/criar-produtos", {error: "Erro ao cadastrar produto."})
    }
  },
  async deleteProduct(req, res) {
    try { const productDeleted = await Product.destroy({
      where: {
          id: req.params.id
      }
  })

  if(!productDeleted)
      return res.render("/admin/lista-produtos", {error: "Produto não deletado.Tente Novamente", produtos: await Product.findAll()})
  return res.redirect("/admin/lista-produtos") // usado pela rota DELETE [ sem renderização direta ]
    } catch (error) {
      return res.render("/admin/lista-produtos", {error: "Produto não deletado.Tente Novamente", produtos: await Product.findAll()})
    }
  },
  async editProductPage(req, res) {
    const {id} = req.params
        const products = await Product.findByPk(id);
        return res.render('admin/updateProduct',{products})  
  },
  async editProduct(req, res) {
    try {
      let image = undefined
      const {id} = req.params 
      const { name, unit_price, offer_price, description } = req.body
      if (req.file && req.files != "undefined") {
        const { filename } = req.file;
        image = filename;
      }
      await Product.update({
          name,
          unit_price,
          offer_price,
          description,
          image,
      },
          {
              where: {id},
          }
      );
      return res.redirect("/admin/lista-produtos")// usado pela rota PUT [ sem renderização direta ]
    } catch (error) {
      return res.render("admin/updateProduct", {error: "Erro ao tentar editar produto.", products: req.body})
    }
  },

  async productPage(req, res) {
    const {id} = req.params
    try {
      const product = await Product.findAll({
        
      });
      return res.render("item")
    } catch (error) {
      return res.send("/", {error: "Erro ao acessar este produto.", product: req.body})
    }
  },
  

};


module.exports = ProductsController;
