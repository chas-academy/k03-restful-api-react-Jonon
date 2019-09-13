const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require('cors')
require("dotenv/config");

//logger
app.use(morgan("dev"));

//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//cors
app.use(cors());

//Import routes
const productsRoute = require("./routes/products");
const orderRoute = require("./routes/orders");
const categoryRoute = require("./routes/category");
const subcategoryRoute = require("./routes/subcategory");

app.use("/products", productsRoute);
app.use("/orders", orderRoute);
app.use("/category", categoryRoute);
app.use("/subcategory", subcategoryRoute);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

//connect to DB
const uri = process.env.DB_CONNECTION;

const db = mongoose.connect(uri, { useNewUrlParser: true }).catch(error => {
  console.log(error);
});

const PORT = process.env.PORT || 3003;
app.listen(`${PORT}`, () => {
  console.log(`server is up and listening on port ${PORT}`);
});
