const path = require ('path')
const controlador ={

    index: (req, res) =>  {
        res.send("Produtos");
    },

    lista: (req, res) =>  {
        res.send("Lista de produtos");
    },
    criar:(req, res) =>  {
        res.send("Criar produtos");
    },
    cancelar:(req, res) =>  {
        res.send("Apagar produtos");
    },

   /* id: (req, res) => {
        console.log(req.params.id);
        res.send("Veja as nossas ofertas");
    },*/

    categoria: (req,res) => {
        res.render("Categoria")
    }
};

module.exports = controlador