"use strict";
const propertiesReader = require("properties-reader");
// require("dotenv").config();
const properties = propertiesReader("./app.properties");

const esServer = properties.get("es.server");
const esUserName = properties.get("es.username");
const esPassword = properties.get("es.password");
// const esServer = process.env.ES_SERVER;
// const esUserName = process.env.ES_USERNAME;
// const esPassword = process.env.ES_PASSWORD;

module.exports = {
  esServer,
  esUserName,
  esPassword,
};
