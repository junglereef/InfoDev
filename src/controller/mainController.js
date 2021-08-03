const path = require ('path')
const controlador ={

    index: (req, res) =>  {
        res.sendFile(path.join(__dirname,'..','view','home.html'));
    },
    lista: (req, res) =>  {
        res.sendFile(path.join(__dirname,'..','view','lista.html'));
    },
    carrinho:(req, res) =>  {
        res.sendFile(path.join(__dirname,'..','view','carrinho.html'));
    },
    checkout:(req, res) =>  {
        res.sendFile(path.join(__dirname,'..','view','checkout.html'));
    },    
    contato:(req, res) =>  {
        res.sendFile(path.join(__dirname,'..','view','contato.html'));
    }, 
    login:(req, res) =>  {
        res.sendFile(path.join(__dirname,'..','view','login.html'));
    }, 
    contato:(req, res) =>  {
        res.sendFile(path.join(__dirname,'..','view','contato.html'));
    }, 
    produto:(req, res) =>  {
        res.sendFile(path.join(__dirname,'..','view','produto.html'));
    },
    user:(req, res) =>  {
        res.sendFile(path.join(__dirname,'..','view','user.html'));
    }, 
 
/*
    id: (req, res) => {
        console.log(req.params.id);
        res.send("Veja as nossas ofertas");
    },
*/

};

module.exports = controlador