const notification = [
  {
    1: {
      notificationId: "1",
      priority: "medium",
      message:
        "Your Dr. Jhunjhunwala has been delayed the session by 30 minutes",
      time: "2023-02-11T11:11:40",
      status: "delivered",
      medium: ["app", "sms"],
      id: 2,
      senderId: ["application", 7999411516],
    },
  },
  {
    2: {
      notificationId: "2",
      priority: "low",
      message:
        "Your session is cancelled by your doctor, apologies for inconvenience",
      time: "2023-02-11T12:14:40",
      status: "seen",
      medium: ["app"],
      id: 1,
      senderId: ["application"],
    },
  },
  {
    3: {
      notificationId: "3",
      priority: "high",
      message:
        "Your session is cancelled by your doctor, apologies for inconvenience",
      time: "2023-02-11T13:16:40",
      status: "failed",
      medium: ["app", "sms", "mail"],
      id: 9,
      senderId: ["application", "topdoc@gmail.com", 7999411516],
    },
  },
  {
    4: {
      notificationId: "4",
      priority: "medium",
      message:
        "Your Dr. Jhunjhunwala has been delayed the session by 30 minutes",
      time: "2023-02-11T14:17:40",
      status: "delivered",
      medium: ["app", "sms"],
      id: 7,
      senderId: ["application", 7999411516],
    },
  },
  {
    5: {
      notificationId: "5",
      priority: "high",
      message:
        "Your session is cancelled by your doctor, apologies for inconvenience",
      time: "2023-02-11T15:18:40",
      status: "seen",
      medium: ["app", "sms", "mail"],
      id: 3,
      senderId: ["application", "topdoc@gmail.com", 7999411516],
    },
  },
  {
    6: {
      notificationId: "6",
      priority: "low",
      message: "app update is available",
      time: "2023-02-11T19:14:40",
      status: "failed",
      medium: ["app"],
      id: 5,
      senderId: ["application"],
    },
  },
];

module.exports = { notification };
