const path = require ('path')
const controlador ={

    index: (req, res) =>  {
        res.sendFile(path.resolve(__dirname,'..','views','home.html'));
    },
    lista: (req, res) =>  {
        res.sendFile(path.resolve(__dirname,'..','views','lista.html'));
    },
    carrinho:(req, res) =>  {
        res.sendFile(path.resolve(__dirname,'..','views','carrinho.html'));
    },
    checkout:(req, res) =>  {
        res.sendFile(path.resolve(__dirname,'..','views','checkout.html'));
    },    
    contato:(req, res) =>  {
        res.sendFile(path.resolve(__dirname,'..','views','contato.html'));
    }, 
    login:(req, res) =>  {
        res.sendFile(path.resolve(__dirname,'..','views','login.html'));
    }, 
    contato:(req, res) =>  {
        res.sendFile(path.resolve(__dirname,'..','views','contato.html'));
    }, 
    produto:(req, res) =>  {
        res.sendFile(path.resolve(__dirname,'..','views','produto.html'));
    },
    user:(req, res) =>  {
        res.sendFile(path.resolve(__dirname,'..','views','user.html'));
    }, 
 
/*
    id: (req, res) => {
        console.log(req.params.id);
        res.send("Veja as nossas ofertas");
    },
*/

};

module.exports = controlador