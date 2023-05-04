const review = {
  aliases: {
    review: {},
  },
  mappings: {
    properties: {
      reviewRating: {
        type: "double",
      },
      reviewMessage: {
        type: "text",
      },
      reviewTags: {
        type: "keyword",
      },
      reviewDate: {
        type: "date",
        format: "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
      },
      userId: {
        type: "keyword",
      },
      userName: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      isVerifiedUser: {
        type: "boolean",
      },
      doctorId: {
        type: "keyword",
      },
      reviewlastEditedOn: {
        type: "date",
        format: "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
      },
      userScheduleId: {
        type: "keyword",
      },
    },
  },
};

module.exports = { review };
