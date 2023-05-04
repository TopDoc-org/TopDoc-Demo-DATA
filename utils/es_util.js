"use strict";
const { Client } = require("@elastic/elasticsearch");
const properties_util = require("./properties_util");

let esClient = null;

async function setClient() {
  esClient = new Client({
    node: properties_util.esServer,
    auth: {
      username: properties_util.esUserName,
      password: properties_util.esPassword,
    },
  });
}

// create index and insert mapping
async function createIndex(index) {
  try {
    if (!esClient) {
      setClient();
    }
    const exists = await esClient.indices.exists({
      index: Object.keys(index)[0],
    });
    if (exists) {
      return `Index ${Object.keys(index)[0]} already exists`;
    }
    const mappingName = Object.keys(index)[0];
    const mappingValue = index[mappingName];
    return await esClient.indices.create({
      index: mappingName,
      body: mappingValue,
    });
  } catch (error) {
    console.error(error);
    return {
      statuscode: 500,
      message: "There was some error in inserting the mapping",
    };
  }
}

// Insert document
async function insertDocument(index, id, body) {
  try {
    if (!esClient) {
      setClient();
    }
    return await esClient.index({
      id: id,
      index: index,
      body: body,
    });
  } catch (error) {
    console.error(error);
    return {
      statuscode: 500,
      message: "There was some error in inserting the documents.",
    };
  }
}

// Insert Template
async function insertTemplate(template) {
  try {
    if (!esClient) {
      setClient();
    }
    const headers = {
      "Content-Type": "application/json",
    };
    const templateName = Object.keys(template)[0];
    console.log("templateName   ", templateName);
    const templateValue = template[templateName];
    console.log("templateValue   ", templateValue);
    return await esClient.indices.putTemplate({
      name: templateName,
      body: templateValue,
      headers,
    });
  } catch (error) {
    console.error(error);
    return {
      statuscode: 500,
      message: "There was some error in inserting the documents.",
    };
  }
}

// delete index
async function deleteIndex(indexName) {
  try {
    if (!esClient) {
      setClient();
    }
    const exists = await esClient.indices.exists({
      index: indexName,
    });
    if (!exists) {
      return `Index ${indexName} does not exist`;
    }
    return await esClient.indices.delete({ index: indexName });
  } catch (error) {
    console.error(error);
    return {
      statuscode: 500,
      message: "There was some error in deleting the INDEX.",
    };
  }
}

// delete all documents
async function deleteAllDocuments(index) {
  try {
    if (!esClient) {
      setClient();
    }
    const exists = await esClient.indices.exists({
      index: index,
    });
    if (!exists) {
      return `Index ${index} does not exist`;
    }
    return await esClient.deleteByQuery({
      index,
      body: {
        query: {
          match_all: {},
        },
      },
    });
  } catch (error) {
    console.error(error);
    return {
      statuscode: 500,
      message: "There was some error in deleting the INDEX.",
    };
  }
}

module.exports = {
  createIndex,
  insertDocument,
  deleteIndex,
  insertTemplate,
  deleteAllDocuments,
};
