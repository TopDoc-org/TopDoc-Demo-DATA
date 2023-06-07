const doctor = {
  aliases: {
    doctor: {},
  },
  mappings: {
    properties: {
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
      profileCreationDate: {
        type: "date",
        format: "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
      },
      reviewTags: {
        properties: {
          "On Time": {
            type: "long",
          },
          "well-mannered": {
            type: "long",
          },
          "Explains lucidly": {
            type: "long",
          },
          "Great Staff": {
            type: "long",
          },
          "Accurate Diagnosis": {
            type: "long",
          },
          "Clean and Hygenic": {
            type: "long",
          },
        },
      },
      noOfReviews: {
        type: "long",
      },
      consultations: {
        type: "long",
      },
      satisfiedPatients: {
        type: "long",
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
      associatedClinics: {
        type: "nested",
        properties: {
          clinicId: {
            type: "keyword",
          },
          clinicName: {
            type: "text",
          },
          clinicRating: {
            type: "double",
          },
          clinicLocation: {
            type: "text",
          },
          geoPoint: {
            type: "geo_point",
          },
          country: {
            type: "keyword",
          },
          district: {
            type: "keyword",
          },
          state: {
            type: "keyword",
          },
          zipCode: {
            type: "keyword",
          },
          fees: {
            type: "double",
          },
          tagReceived: {
            type: "keyword",
          },
          isActive: {
            type: "boolean",
          },
          clinicImageUrl: {
            type: "keyword",
          },
          clinicSchedule: {
            type: "nested",
            properties: {
              from: {
                type: "keyword",
              },
              to: {
                type: "keyword",
              },
              duration: {
                type: "keyword",
              },
            },
          },
        },
      },
      address: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
          },
        },
      },
      ailmentsTreated: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
          },
        },
      },
      averageRating: {
        type: "double",
      },
      city: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
          },
        },
      },
      district: {
        type: "keyword",
      },
      country: {
        type: "keyword",
      },
      designation: {
        type: "keyword",
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
      email: {
        type: "keyword",
      },
      experience: {
        type: "nested",
        properties: {
          organisation: {
            type: "keyword",
          },
          description: {
            type: "keyword",
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
      firstName: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
          },
        },
      },
      gender: {
        type: "keyword",
      },
      hospital: {
        type: "nested",
        properties: {
          identfier: {
            type: "keyword",
          },
          name: {
            type: "keyword",
          },
        },
      },
      id: {
        type: "keyword",
      },
      isPersonAllowed: {
        type: "boolean",
      },
      isVideoAllowed: {
        type: "boolean",
      },
      landmark: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
          },
        },
      },
      languages: {
        type: "keyword",
      },
      lastName: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
          },
        },
      },
      licenses: {
        type: "nested",
        properties: {
          identifier: {
            type: "keyword",
          },
          name: {
            type: "keyword",
          },
          registrationYear: {
            type: "date",
          },
          validUpTo: {
            type: "date",
          },
          provider: {
            type: "keyword",
          },
        },
      },
      locality: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
          },
        },
      },
      location: {
        type: "geo_point",
      },
      name: {
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
      schedule: {
        properties: {
          doctorId: {
            type: "keyword",
          },
          duration: {
            type: "long",
          },
          days: {
            type: "nested",
            properties: {
              dayName: {
                type: "keyword",
              },
              date: {
                type: "date",
              },
              sessions: {
                type: "nested",
                properties: {
                  sessionId: {
                    type: "keyword",
                  },
                  startTime: {
                    type: "date",
                    format: "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
                  },
                  endTime: {
                    type: "date",
                    format: "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
                  },
                  sessionSlots: {
                    type: "keyword",
                  },
                  prioritySlots: {
                    type: "keyword",
                  },
                  clinic: {
                    properties: {
                      clinicId: {
                        type: "keyword",
                      },
                      clinicName: {
                        type: "text",
                      },
                      clinicRating: {
                        type: "double",
                      },
                      clinicLocation: {
                        type: "text",
                      },
                      geoPoint: {
                        type: "geo_point",
                      },
                      country: {
                        type: "keyword",
                      },
                      district: {
                        type: "keyword",
                      },
                      state: {
                        type: "keyword",
                      },
                      zipCode: {
                        type: "keyword",
                      },
                      fees: {
                        type: "double",
                      },
                      tagReceived: {
                        type: "keyword",
                      },
                      isActive: {
                        type: "boolean",
                      },
                      clinicImageUrl: {
                        type: "keyword",
                      },
                      clinicSchedule: {
                        type: "nested",
                        properties: {
                          from: {
                            type: "keyword",
                          },
                          to: {
                            type: "keyword",
                          },
                          duration: {
                            type: "keyword",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      specialization: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
          },
        },
      },
      state: {
        type: "keyword",
      },
      yearsOfExperience: {
        type: "long",
      },
      symptomsKeywordList: {
        type: "keyword",
      },
      diagnosisKeywordList: {
        type: "keyword",
      },
      testsKeywordList: {
        type: "keyword",
      },
      medicinesKeywordList: {
        type: "keyword",
      },
      pin: {
        type: "keyword",
      },
      password: {
        type: "keyword",
      },
    },
  },
};

module.exports = { doctor };
