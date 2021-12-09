const express = require("express");
const session = require("express-session");
const path = require("path");
const logger = require("morgan");
const app = express();
const methodOverride = require("method-override");
const bodyParser = require('body-parser');


//Definindo utilização de rotas
const mainRoutes = require("./routes");
const productsRoutes = require("./routes/products");
const adminRoutes = require("./routes/admin");
const authRoutes = require("./routes/auth");
const clientRoutes = require("./routes/client");
//estabelecendo uma porta para inicialização do servidor
const port = 3000;

app.use(logger("dev"));
/*https://expressjs.com/en/resources/middleware/morgan.html*/

app.use(
  session({
    secret: "6U5KAYDRTYPXLASUDOF",
    resave: true,
    saveUninitialized: true,
    cookies: { secure: "auto", maxAge: 21600000 },
  })
);

//Definindo Pasta Pública
app.use(express.static(path.resolve(__dirname, "public")));

//Definindo methodOverride para trabalhar com métodos HTTP (PUT/DELETE)
// ?method=[MédotoHTTP]
app.use(methodOverride("_method"));

//Definindo view Engine e Pasta Views
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

// Definindo uso de JSON
app.use(express.json()); /*Adicionado do print de aula 27072021*/
// Desabilitando Encoded
app.use(
  express.urlencoded({ extended: false })
); /*Adicionado do print de aula 27072021*/

app.use(mainRoutes);
app.use("/produtos", productsRoutes);
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/cliente", clientRoutes);
/*Import Bootstrap*/


app.listen(port, () => {
  console.log(`O servidor esta rodando em http://localhost:${port}`);
});
// Definindo port de escuta
