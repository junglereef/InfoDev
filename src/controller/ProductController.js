
const {Product}  = require("../models")
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

        return res.redirect("/admin/painel");
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
    try {
      const productEdit = await Product.findOne({
        where: {id: req.params.id}
    })
      // const {id} = req.params;
      if(productEdit != null)
      return res.render('admin/editar-produto', {products: productEdit})    
  return res.render('admin/lista-produtos', {error: "Não há produtos cadastrado.", product: null})// Rota administrativa 'admin/produtos/editar/id'
    } catch (error) {
      res.render('admin/lista-produtos', {error: "Erro ao tentar editar produto.", produtos: null})
      console.log(error);
    }
  },
  async editProduct(req, res) {
    try {
      const { name, price,offer_price, description } = req.body
      await Product.update({
          name,
          price,
          offer_price,
          description,
          image: req.file.filename,
          updatedAt: new Date().toISOString()
      },
          {
              where: {id: req.params.id},
          }
      );
      return res.redirect("/admin/lista-produtos")// usado pela rota PUT [ sem renderização direta ]
    } catch (error) {
      return res.render("admin/editar-produto", {error: "Erro ao tentar editar produto.", produto: req.body})
    }
  },

  async productPage(req, res) {
    try {
      // const { name, price,offer_price, description } = req.body
      // await Product({
      //     name,
      //     price,
      //     offer_price,
      //     description,
      //     image: req.file.filename,
      // },
      //     {
      //         where: {id: req.params.id},
      //     }
      // );
      return res.render("item")
    } catch (error) {
      return res.send("/", {error: "Erro ao tentar editar produto.", produto: req.body})
    }
  },
  

};


module.exports = ProductsController;
