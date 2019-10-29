const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require('cors')
require("dotenv/config");

// Fix deprication warning
mongoose.set('useCreateIndex', true);

//logger
app.use(morgan("dev"));

//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//cors
app.use(cors());

//Import routes
const usersRoute = require("./routes/users");
const productsRoute = require("./routes/products");
const orderRoute = require("./routes/orders");
const categoriesRoute = require("./routes/categories");

// Handle routes
app.use("/users", usersRoute)
app.use("/products", productsRoute);
app.use("/orders", orderRoute);
app.use("/categories", categoriesRoute);

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
