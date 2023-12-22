"use strict";
const esdb = require("../../utils/es_util");

/**
 * Select version for the Indexes
 */
const index_Version = "v1";

/**
 * Select the Indexes whose data have to be deleted from ElasticSearch
 * and comment the indexes whose data is not required to be deleted
 */
const indexToDeleteAllDataFrom = [
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
  // "config",
  "post",
  "student",
];

const filterIndexes = indexToDeleteAllDataFrom.map((variable) => {
  return `${variable}_${index_Version}`;
});

/**
 * Delete the data from index in Elasticsearch
 */
filterIndexes.forEach(async (index) => {
  const response = await esdb.deleteAllDocuments(index);
  if (response.hasOwnProperty("deleted")) {
    console.log(`${response.deleted} indexs deleted from ${index}`);
  } else {
    console.log(
      `Error in deleting the documents from INDEX ${index} : `,
      response
    );
  }
});
