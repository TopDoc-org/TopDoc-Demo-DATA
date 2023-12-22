"use strict";
const esdb = require("../../utils/es_util");
const demoDataConstants = require("../constants/scriptConstants");

/**
 * Select version for the Indexes
 */
const mappingIndexes_Version = "v1";

/**
 * Select the Indexes whose data are to be inserted in ElasticSearch
 * and comment the indexes whole data is not required to be inserted
 */
const mappingsToInsert = [
  "ads",
  "booking",
  "doctor",
  "notification",
  "payments",
  "review",
  "schedule",
  "staff",
  "support",
  "user",
  "config",
  "post",
  "student",
];

let filteredDemoData = demoDataConstants.demoData.filter((index) =>
  mappingsToInsert.includes(Object.keys(index)[0])
);

filteredDemoData = filteredDemoData.map((variable) => {
  const oldVariableName = Object.keys(variable)[0];
  const variableValue = variable[oldVariableName];
  const newVariableName = `${oldVariableName}_${mappingIndexes_Version}`;
  return { [newVariableName]: variableValue };
});

/**
 * Insert the data into Elasticsearch
 */
filteredDemoData.forEach(async (document) => {
  const index = Object.keys(document)[0];
  const demoDataArray = document[index];
  demoDataArray.forEach(async (demoData) => {
    let id = Object.keys(demoData)[0];
    let body = demoData[id];
    const response = await esdb.insertDocument(index, id, body);
    if (response.result == "created" || response.result == "updated") {
      console.log(
        `Data was successfully inserted for INDEX ${Object.keys(document)[0]}`
      );
    } else {
      console.log(
        `Error in inserting data for INDEX ${Object.keys(document)[0]} : `,
        response
      );
    }
  });
});
