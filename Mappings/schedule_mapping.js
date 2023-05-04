const schedule = {
  aliases: {
    schedule: {},
  },
  mappings: {
    properties: {
      address: {
        type: "keyword",
      },
      appointmentAttended: {
        type: "boolean",
      },
      appointmentId: {
        type: "keyword",
      },
      appointmentNumber: {
        type: "keyword",
      },
      appointmentTime: {
        type: "date",
        format: "basic_date_time_no_millis",
      },
      doctorComment: {
        type: "keyword",
      },
      doctorId: {
        type: "keyword",
      },
      hasSeenDoctorBefore: {
        type: "boolean",
      },
      location: {
        type: "geo_point",
      },
      patientComment: {
        type: "keyword",
      },
      patientId: {
        type: "keyword",
      },
      reasonForVisit: {
        type: "keyword",
      },
      status: {
        type: "keyword",
      },
      slotDay: {
        type: "keyword",
      },
      slotTime: {
        type: "keyword",
      },
      type: {
        type: "keyword",
      },
    },
  },
};

module.exports = { schedule };
