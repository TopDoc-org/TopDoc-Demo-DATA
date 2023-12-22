const student = {
  aliases: {
    student: {},
  },
  mappings: {
    properties: {
      id: {
        type: "keyword",
      },
      firstName: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
          },
        },
      },
      name: {
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
        type: "keyword",
      },
      isEmailVerified: {
        type: "boolean",
      },
      acceptTerms: {
        type: "boolean",
      },
      emailVerificationOtp: {
        type: "long",
      },
      profileCreationDate: {
        type: "date",
        format: "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
      },
      password: {
        type: "keyword",
      },
      dob: {
        type: "date",
      },
      gender: {
        type: "keyword",
      },
      role: {
        type: "keyword",
      },
      userType: {
        type: "keyword",
      },
      currentDegree: {
        type: "keyword",
      },
      course: {
        type: "keyword",
      },
      subject: {
        type: "keyword",
      },
      rollNo: {
        type: "keyword",
      },
      state: {
        type: "keyword",
      },
      collegeName: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
          },
        },
      },
      yearOfPassing: {
        type: "keyword",
      },
      awardsAndPublications: {
        type: "nested",
        properties: {
          awardName: {
            type: "keyword",
          },
          place: {
            type: "keyword",
          },
          date: {
            type: "date",
          },
        },
      },
      education: {
        type: "nested",
        properties: {
          degree: {
            type: "keyword",
          },
          description: {
            type: "keyword",
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
      rights: {
        type: "keyword",
      },
      address: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
          },
        },
      },
      country: {
        type: "keyword",
      },
      profImageUrl: {
        properties: {
          imageName: {
            type: "keyword",
          },
          src: {
            type: "keyword",
          },
        },
      },
    },
  },
};

module.exports = { student };
