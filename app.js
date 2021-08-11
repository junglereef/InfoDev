const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
//Definindo Pasta Pública
app.use(express.static(path.join(__dirname, "public")));

//Definindo view Engine e Pasta Views
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

//Definindo utilização de rotas
const rotas = require("./src/routes");
app.use(rotas);
const rotasDeProdutos = require("./src/routes/produtos");
app.use("/produtos", rotasDeProdutos);

// Definindo uso de JSON
app.use(express.json()); /*Adicionado do print de aula 27072021*/
// Desabilitando Encoded
app.use(
  express.urlencoded({ extended: false })
); /*Adicionado do print de aula 27072021*/
// Definindo port de escuta
app.listen(port, () => {
  console.log(`O servidor esta rodando em http://localhost:${port}`);
});
