const express = require("express");
//const router = express.Router();
//module.exports = router;
const bodyParser = require("body-parser");
const cors = require("cors");
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "test"
  }
});
const app = express();
const port = 7001;
