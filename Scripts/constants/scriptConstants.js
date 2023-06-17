"use strict";
const requireDir = require("require-dir");
const mapping_modules = requireDir("../../Mappings", { recurse: true });
// const template_modules = requireDir("../../ESDBTemplates", { recurse: true });
const data_modules = requireDir("../../DemoData", { recurse: true });
// console.log(mapping_modules);
// console.log(template_modules);
// console.log(data_modules);

// const [ads_template, booking_template, review_template, search_templates] = [
//   template_modules.ads_template,
//   template_modules.booking_template,
//   template_modules.review_template,
//   template_modules.search_templates,
// ];

const [
  ads_data,
  booking_data,
  doctor_data,
  notification_data,
  payment_data,
  queue_data,
  review_data,
  staff_data,
  support_data,
  user_data,
  config_data,
] = [
  data_modules.ads_data,
  data_modules.booking_data,
  data_modules.doctor_data,
  data_modules.notification_data,
  data_modules.payments_data,
  data_modules.queue_data,
  data_modules.review_data,
  data_modules.staff_data,
  data_modules.support_data,
  data_modules.user_data,
  data_modules.config_data,
];

const [
  ads,
  booking,
  doctor,
  notification,
  payments,
  review,
  schedule,
  staff,
  support,
  user,
  config,
] = [
  mapping_modules.ads_mapping,
  mapping_modules.booking_mapping,
  mapping_modules.doctor_mapping,
  mapping_modules.notification_mapping,
  mapping_modules.payments_mapping,
  mapping_modules.review_mapping,
  mapping_modules.schedule_mapping,
  mapping_modules.staff_mapping,
  mapping_modules.support_mapping,
  mapping_modules.user_mapping,
  mapping_modules.config_mapping,
];

const mappingIndexes = [
  ads,
  booking,
  doctor,
  notification,
  payments,
  review,
  schedule,
  staff,
  support,
  user,
  config,
];

const demoData = [
  ads_data,
  booking_data,
  doctor_data,
  notification_data,
  payment_data,
  queue_data,
  review_data,
  staff_data,
  support_data,
  user_data,
  config_data,
];
// const templates = [
//   ads_template,
//   booking_template,
//   review_template,
//   search_templates,
// ];
// console.log("at last  >>> ", mappingIndexes);
// console.log("at last  >>> ", review_template);
// console.log("at last  >>> ", demoData);

module.exports = {
  mappingIndexes,
  // templates,
  demoData,
};
