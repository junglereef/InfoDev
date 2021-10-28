const express = require('express');
const path = require("path");
const app = express();
//Definindo utilização de rotas
const rotas = require("./src/routes");
const rotasDeProdutos = require("./src/routes/produtos");
const port = 3000;

const logger = require("morgan");
app.use(logger("dev"));
/*https://expressjs.com/en/resources/middleware/morgan.html*/
//Definindo Pasta Pública
app.use(express.static(path.join(__dirname, "src/public")));

//Definindo view Engine e Pasta Views
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));



// Definindo uso de JSON
app.use(express.json()); /*Adicionado do print de aula 27072021*/
// Desabilitando Encoded
app.use(express.urlencoded({ extended: false })
); /*Adicionado do print de aula 27072021*/
app.use(rotas);
app.use(rotasDeProdutos);

app.listen(port, () => {
  console.log(`O servidor esta rodando em http://localhost:${port}`);
});
// Definindo port de escuta