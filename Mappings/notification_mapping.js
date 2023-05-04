const notification = {
  aliases: {
    notification: {},
  },
  mappings: {
    properties: {
      notificationId: {
        type: "keyword",
      },
      priority: {
        type: "keyword",
      },
      message: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
          },
        },
      },
      time: {
        type: "keyword",
      },
      status: {
        type: "keyword",
      },
      medium: {
        type: "keyword",
      },
      userId: {
        type: "keyword",
      },
      senderId: {
        type: "keyword",
      },
    },
  },
};

module.exports = { notification };
