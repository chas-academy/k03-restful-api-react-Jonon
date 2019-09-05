const express = require("express");
const app = express();
const morgan = require('morgan')

//logger
app.use(morgan('combined'))



const PORT = 3003;
app.listen(`${PORT}`, () => {
  console.log(`server is up and listening on port ${PORT}`);
});
