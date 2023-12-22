"use strict";
const esdb = require("../../utils/es_util");

/**
 * Select version for the Indexes
 */
const index_Version = "v1";

/**
 * Select the Indexes which have to be deleted from ElasticSearch
 * and comment the indexes which is not required to be deleted
 */
const indexToDelete = [
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

const filterIndexes = indexToDelete.map((variable) => {
  return `${variable}_${index_Version}`;
});

/**
 * Delete the INDEX from Elasticsearch
 */
filterIndexes.forEach(async (indexName) => {
  const response = await esdb.deleteIndex(indexName);
  if (response.hasOwnProperty("acknowledged") && response.acknowledged) {
    console.log(`Successfully deleted INDEX ${indexName}`);
  } else {
    console.log(`Error in deleting INDEX ${indexName} : `, response);
  }
});
