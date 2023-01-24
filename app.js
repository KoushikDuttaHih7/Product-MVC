const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require('./controllers/error')

const app = express();

app.set('view engine','ejs')
app.set('views','views')

const port = 4000;

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.urlencoded({ extended: true }))
// app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(port, () => {
  console.log('Server started at http://localhost:4000/');
});
