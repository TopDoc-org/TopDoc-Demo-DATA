const payment = {
  aliases: {
    payment: {},
  },
  mappings: {
    properties: {
      paymentType: {
        type: "keyword",
      },
      couponApplied: {
        type: "keyword",
      },
      slotType: {
        type: "keyword",
      },
      doctorId: {
        type: "keyword",
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
      orderId: {
        type: "keyword",
      },
      amount: {
        type: "double",
      },
      dateAndTime: {
        type: "date",
        format: "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
      },
      paymentStatus: {
        type: "keyword",
      },
    },
  },
};

module.exports = { payment };
