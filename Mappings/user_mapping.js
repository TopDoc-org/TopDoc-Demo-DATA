const user = {
  aliases: {
    user: {},
  },
  mappings: {
    properties: {
      DOB: {
        type: "date",
      },
      profileCreationDate: {
        type: "date",
        format: "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
      },
      profImageUrl: {
        enabled: false,
      },
      Zipcode: {
        type: "keyword",
      },
      address: {
        type: "text",
      },
      blood_donor: {
        type: "boolean",
      },
      city: {
        type: "keyword",
      },
      district: {
        type: "keyword",
      },
      country: {
        type: "keyword",
      },
      email: {
        type: "keyword",
      },
      gender: {
        type: "keyword",
      },
      id: {
        type: "keyword",
      },
      insurance_details: {
        properties: {
          coverage: {
            properties: {
              end_date: {
                type: "date",
              },
              start_date: {
                type: "date",
              },
            },
          },
          documents: {
            type: "keyword",
          },
          id: {
            type: "text",
            fields: {
              keyword: {
                type: "keyword",
                ignore_above: 256,
              },
            },
          },
          provider: {
            type: "keyword",
          },
        },
      },
      isPremiumUser: {
        type: "boolean",
      },
      landmark: {
        type: "text",
      },
      languages: {
        type: "keyword",
      },
      locality: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      medical_records: {
        properties: {
          alcohol_user: {
            type: "text",
          },
          allergies: {
            type: "text",
            fields: {
              keyword: {
                type: "keyword",
                ignore_above: 256,
              },
            },
          },
          blood_group: {
            type: "keyword",
          },
          drug_user: {
            type: "text",
          },
          past_procedures: {
            properties: {
              date: {
                type: "date",
              },
              name: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
            },
          },
          pre_existing_conditions: {
            properties: {
              duration: {
                type: "float",
              },
              name: {
                type: "text",
                fields: {
                  keyword: {
                    type: "keyword",
                    ignore_above: 256,
                  },
                },
              },
            },
          },
          smoker: {
            type: "text",
          },
        },
      },
      mobile: {
        type: "keyword",
      },
      name: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      role: {
        type: "keyword",
      },
      rights: {
        type: "keyword",
      },
      userType: {
        type: "keyword",
      },
      state: {
        type: "keyword",
      },
      medicalDetails: {
        type: "nested",
        properties: {
          name: {
            type: "keyword",
          },
          bmi: {
            type: "float",
          },
          heartRate: {
            type: "float",
          },
          fbcStatus: {
            type: "float",
          },
          weight: {
            type: "float",
          },
          orderDate: {
            type: "date",
            format: "basic_date_time_no_millis",
          },
        },
      },
      coins: {
        type: "long",
      },
      first_name: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
          },
        },
      },
      last_name: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
          },
        },
      },
      favouriteDoctor: {
        properties: {
          date: {
            type: "date",
            format: "basic_date_time_no_millis",
          },
          doctorId: {
            type: "keyword",
          },
        },
      },
      lastSeenAdsPage: {
        type: "long",
      },
    },
  },
};

module.exports = { user };
