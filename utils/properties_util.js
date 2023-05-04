"use strict";
var propertiesReader = require("properties-reader");
var properties = propertiesReader("./app.properties");

const esServer = properties.get("es.server");
const esUserName = properties.get("es.username");
const esPassword = properties.get("es.password");

module.exports = {
  esServer,
  esUserName,
  esPassword,
};
