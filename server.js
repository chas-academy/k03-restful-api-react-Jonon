const mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const connectDb = require("./config/db");

const cors = require("cors");
require("dotenv/config");
const passport = require("passport");

//Import routes
const usersRoute = require("./routes/users");
const productsRoute = require("./routes/products");
const orderRoute = require("./routes/orders");
const categoriesRoute = require("./routes/categories");
const adminRoute = require("./routes/admin");

// Fix deprication warning
mongoose.set("useCreateIndex", true);

//logger
app.use(morgan("dev"));

//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Connect to mongoDb
connectDb();

//cors
app.use(cors());

// passport middleware
app.use(passport.initialize());

// passport config
require("./config/passport")(passport);

// Handle routes
app.use("/users", usersRoute);
app.use("/products", productsRoute);
app.use("/orders", orderRoute);
app.use("/categories", categoriesRoute);
app.use("/admin-dashboard", adminRoute);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const PORT = process.env.PORT || 3003;
app.listen(`${PORT}`, () => {
  console.log(`server is up and listening on port ${PORT}`);
});
