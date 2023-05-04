const staff = {
  aliases: {
    staff: {},
  },
  mappings: {
    properties: {
      profileCreationDate: {
        type: "date",
        format: "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
      },
      firstName: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
          },
        },
      },
      lastName: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
          },
        },
      },
      mobile: {
        type: "keyword",
      },
      email: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
          },
        },
      },
      mappedTo: {
        type: "keyword",
      },
      education: {
        type: "nested",
        properties: {
          degree: {
            type: "keyword",
          },
          description: {
            type: "text",
          },
          endDate: {
            type: "date",
          },
          fieldOfStudy: {
            type: "keyword",
          },
          institute: {
            type: "keyword",
          },
          startDate: {
            type: "date",
          },
        },
      },
      experience: {
        type: "nested",
        properties: {
          organisation: {
            type: "text",
          },
          description: {
            type: "text",
          },
          endDate: {
            type: "date",
          },
          location: {
            type: "keyword",
          },
          startDate: {
            type: "date",
          },
          title: {
            type: "keyword",
          },
        },
      },
      pin: {
        type: "long",
      },
      password: {
        type: "keyword",
      },
      staffId: {
        type: "keyword",
      },
      designation: {
        type: "keyword",
      },
    },
  },
};

module.exports = { staff };
