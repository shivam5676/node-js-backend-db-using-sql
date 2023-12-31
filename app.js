const bodyParser = require("body-parser");

const express = require("express");
const adminRoutes=require("./routes/admin");
const shopRoutes=require("./routes/shop");

const app = express();
app.use(bodyParser.urlencoded({ extended: false })); 

app.use(adminRoutes);

app.use(shopRoutes);
app.use( (req,res,next) => {
  res.status(404).send('<h1>PAGE NOT FOUND</h1>')
  console.log("Hello Shivam")
})


app.listen(3000);
