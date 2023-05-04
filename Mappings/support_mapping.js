const support = {
  aliases: {
    support: {},
  },
  mappings: {
    properties: {
      ticketNumber: {
        type: "keyword",
      },
      role: {
        type: "keyword",
      },
      reporterID: {
        type: "keyword",
      },
      priority: {
        type: "keyword",
      },
      fullName: {
        type: "keyword",
      },
      email: {
        type: "keyword",
      },
      mobile: {
        type: "keyword",
      },
      subject: {
        type: "text",
      },
      escalatedTo: {
        type: "keyword",
      },
      escalationRemark: {
        type: "text",
      },
      description: {
        type: "text",
      },
      supportingDocuments: {
        type: "keyword",
      },
      raisedOn: {
        type: "date",
        format: "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
      },
      resolvedOn: {
        type: "date",
        format: "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
      },
      cancelledOn: {
        type: "date",
        format: "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
      },
      assignedTo: {
        type: "keyword",
      },
      remarks: {
        type: "text",
      },
      status: {
        type: "keyword",
      },
      chat: {
        type: "nested",
        properties: {
          sender: {
            type: "keyword",
          },
          recipient: {
            type: "keyword",
          },
          timestamp: {
            type: "date",
            format: "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
          },
          message: {
            type: "text",
          },
          additionalDocuments: {
            type: "keyword",
          },
        },
      },
    },
  },
};

module.exports = { support };
