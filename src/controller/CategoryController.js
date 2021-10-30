const {Category, Product } = require("../models")

const CategoryController = {
    createCategoryPage(req, res){
        try {
            return res.render("admin/dashboard", {
                file: "categories/create",
                page: "Adicionar Categoria",
            });
        } catch (error) {
            console.log(error);
        }
    },

async listaCategoryPage(req,res){
    try {
        const categoriesLis = await Categoria
        return res.render("admin/dashboard", {
            file: "categories/list",
            page: "Categorias", 
        });
    }catch (error) {
        console.log(error);
    }
},

async viewCategoryPage(req,res) {
    res.render("admin/dashboard", {
        file:"categories/view", 
        page:"",
    });
},

}

module.exports =  CategoryController;