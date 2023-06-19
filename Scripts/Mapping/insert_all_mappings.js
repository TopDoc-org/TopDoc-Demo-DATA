"use strict";
const esdb = require("../../utils/es_util");
const mappingsConstants = require("../constants/scriptConstants");

/**
 * Select version for the Indexes
 */
const mappingIndexes_Version = "v1";

/**
 * Select the Indexes whose mappings are to be inserted in ElasticSearch
 * and comment the indexes whole mappings is not required to be inserted
 */
const mappingsToInsert = [
  // "ads",
  // "booking",
  // "doctor",
  // "notification",
  // "payments",
  // "review",
  // "schedule",
  // "staff",
  // "support",
  // "user",
  "config",
];

let filteredMappings = mappingsConstants.mappingIndexes.filter((index) =>
  mappingsToInsert.includes(Object.keys(index)[0])
);

filteredMappings = filteredMappings.map((variable) => {
  const oldVariableName = Object.keys(variable)[0];
  const variableValue = variable[oldVariableName];
  const newVariableName = `${oldVariableName}_${mappingIndexes_Version}`;
  return { [newVariableName]: variableValue };
});

/**
 * Insert the mappings into Elasticsearch
 */
filteredMappings.forEach(async (index) => {
  const response = await esdb.createIndex(index);
  if (response.hasOwnProperty("acknowledged") && response.acknowledged) {
    console.log(
      `Mapping was successfully created for INDEX ${Object.keys(index)[0]}`
    );
  } else {
    console.log(
      `Error in creating mapping for INDEX ${Object.keys(index)[0]} : `,
      response
    );
  }
});
