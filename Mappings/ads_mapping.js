const ads = {
  aliases: {
    ads: {},
  },
  mappings: {
    properties: {
      banner: {
        properties: {
          name: {
            type: "text",
            fields: {
              keyword: {
                type: "keyword",
              },
            },
          },
          clinicName: {
            type: "text",
          },
          phoneNumber: {
            type: "keyword",
          },
        },
      },
      templateId: {
        type: "keyword",
      },
      adId: {
        type: "keyword",
      },
      doctorId: {
        type: "keyword",
      },
      submittedBy: {
        type: "keyword",
      },
      targetDistrict: {
        type: "keyword",
      },
      targetState: {
        type: "keyword",
      },
      duration: {
        type: "long",
      },
      approvedBy: {
        type: "keyword",
      },
      startDate: {
        type: "date",
      },
      endDate: {
        type: "date",
      },
      status: {
        type: "text",
      },
      billing: {
        type: "keyword",
      },
      clicks: {
        type: "long",
      },
      appearances: {
        type: "long",
      },
    },
  },
};

module.exports = { ads };
