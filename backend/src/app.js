const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// conection db
require("./db/conn");

// Router
const router = require("./router/router");

app.use(router);

module.exports = app;
