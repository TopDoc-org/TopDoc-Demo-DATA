"use strict";
const esdb = require("../../utils/es_util");
const mappingsConstants = require("../constants/scriptConstants");

/**
 * Select the templatees whose mappings are to be inserted in ElasticSearch
 * and comment the templatees whole mappings is not required to be inserted
 */
const mappingsToInsert = [
  // "getAdsDetailsByDoctorId",
  // "bookingTemplate",
  "reviewTemplate",
  // "doctorTemplate",
];

let filteredMappings = mappingsConstants.templates.filter((template) =>
  mappingsToInsert.includes(Object.keys(template)[0])
);

// filteredMappings = filteredMappings.map((variable) => {
//   const oldVariableName = Object.keys(variable)[0];
//   const variableValue = variable[oldVariableName];
//   const newVariableName = `${oldVariableName}_${mappingtemplatees_Version}`;
//   return { [newVariableName]: variableValue };
// });

/**
 * Insert the mappings into Elasticsearch
 */
filteredMappings.forEach(async (template) => {
  const response = await esdb.insertTemplate(template);
  if (response.hasOwnProperty("acknowledged") && response.acknowledged) {
    console.log(
      `Mapping was successfully created for template ${
        Object.keys(template)[0]
      }`
    );
  } else {
    console.log(
      `Error in creating mapping for template ${Object.keys(template)[0]} : `,
      response
    );
  }
});

// Insert the mapping into Elasticsearch
// async function createtemplate() {
//   try {
//     const { body: response } = await esClient.indices.create({
//       template: "schedule_v1",
//       body: mapping,
//     });
//     if (response.acknowledged) {
//       console.log("Mapping was successfully created!");
//     } else {
//       console.log("Error creating mapping:", response.error);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// createtemplate();
