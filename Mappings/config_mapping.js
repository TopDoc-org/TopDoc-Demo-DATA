const config = {
  aliases: {
    config: {},
  },
  mappings: {
    properties: {
      configVersion: {
        type: "keyword",
      },
      configId: {
        type: "keyword",
      },
      isNewVersionAvl: {
        type: "keyword",
      },
      configRole: {
        type: "keyword",
      },
      createdBy: {
        type: "keyword",
      },
      createdOn: {
        type: "date",
        format: "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
      },
      lastUpdatedBy: {
        type: "keyword",
      },
      lastUpdatedOn: {
        type: "date",
        format: "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
      },
      isOnline: {
        type: "boolean",
      },
      maintenance: {
        properties: {
          isActive: {
            type: "boolean",
          },
          type: {
            type: "keyword",
          },
          downTimeFrom: {
            type: "date",
            format: "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
          },
          downTimeTO: {
            type: "date",
            format: "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
          },
          message: {
            type: "text",
            fields: {
              keyword: {
                type: "keyword",
              },
            },
          },
          triggeredBy: {
            type: "keyword",
          },
          urgency: {
            type: "keyword",
          },
          consumer: {
            type: "keyword",
          },
        },
      },
      banner: {
        properties: {
          isActive: {
            type: "boolean",
          },
          buttonName: {
            type: "keyword",
          },
          expiryDate: {
            type: "date",
            format: "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
          },
          message: {
            type: "text",
            fields: {
              keyword: {
                type: "keyword",
              },
            },
          },
          url: {
            type: "keyword",
          },
          consumer: {
            type: "keyword",
          },
        },
      },
    },
  },
};

module.exports = { config };
