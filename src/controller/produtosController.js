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
    deletar:(req, res) =>  {
        res.send("Apagar produtos");
    },

    id: (req, res) => {
        console.log(req.params.id);
        res.send("Veja as nossas ofertas");
    },

    categoria: (req,res) => {
        res.send("Categoria")
    }
};

module.exports = controlador