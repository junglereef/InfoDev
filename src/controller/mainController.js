const path = require ('path')
const controlador ={

    index: (req, res) =>  {
        res.render('home');
    },
    lista: (req, res) =>  {
        res.render('lista');
    },
    carrinho:(req, res) =>  {
        res.render('carrinho');
    },
    checkout:(req, res) =>  {
        res.render('checkout');
    },    
    contato:(req, res) =>  {
        res.render('contato');
    }, 
    login:(req, res) =>  {
        res.render('login');
    }, 
    contato:(req, res) =>  {
        res.render('contato');
    }, 
    produto:(req, res) =>  {
        res.render('produto');
    },
    user:(req, res) =>  {
        res.render('user');
    }, 
 
/*
    id: (req, res) => {
        console.log(req.params.id);
        res.send("Veja as nossas ofertas");
    },
*/

};

module.exports = controlador