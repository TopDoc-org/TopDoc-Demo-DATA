const post = [
  {
    1: {
      id: "1",
      postVisibility: "public",
      postFrom: "student",
      createdOn: "2021-01-01T07:30:00.000-0530",
      LastModifiedOn: "2023-07-01T07:30:00.000-0530",
      body: {
        post: "hello this is my 1st post",
        images: [
          "https://img.freepik.com/premium-vector/hi-word-speech-bubble-funny-lettering-typography-sticker-social-media-content_102918-48.jpg",
        ],
        attachments: ["https://www.africau.edu/images/default/sample.pdf"],
      },
      createdBy: {
        id: "3",
        name: "Sai Sarthak",
        profilePicture:
          "https://ih1.redbubble.net/image.4285147971.3103/mo,small,flatlay,product_square,600x600.jpg",
      },
      likedBy: [
        {
          id: "1",
          name: "Sachin",
          profilePicture:
            "https://ih1.redbubble.net/image.4285147971.3103/mo,small,flatlay,product_square,600x600.jpg",
        },
      ],
      commentedBy: [
        {
          id: "2",
          name: "Akash Nekhara",
          profilePicture:
            "https://ih1.redbubble.net/image.4285147971.3103/mo,small,flatlay,product_square,600x600.jpg",
          commentBody: "Good game",
          createdOn: "2021-01-01T07:30:00.000-0530",
          LastModifiedOn: "2021-04-01T07:30:00.000-0530",
        },
        {
          id: "3",
          name: "Shukla Sachin",
          profilePicture:
            "https://ih1.redbubble.net/image.4285147971.3103/mo,small,flatlay,product_square,600x600.jpg",
          commentBody: "Good game",
          createdOn: "2023-01-01T07:30:00.000-0530",
        },
      ],
      flaggedBy: [
        {
          id: "3",
          name: "Sachin muthuswamy venugopal Krishnagopal Iyer",
          profilePicture:
            "https://ih1.redbubble.net/image.4285147971.3103/mo,small,flatlay,product_square,600x600.jpg",
        },
      ],
      status: "published",
      hashtags: ["#heloo", "#topdoc", "#justiceForChutki"],
      mentionedPeople: [],
      language: ["English", "Hindi"],
    },
  },
  {
    2: {
      id: "2",
      postVisibility: "public",
      postFrom: "doctor",
      createdOn: "2021-01-01T07:30:00.000-0530",
      LastModifiedOn: "2023-07-01T07:30:00.000-0530",
      body: {
        post: "hello this is my 2nd post",
        images: [
          "https://img.freepik.com/premium-vector/hi-word-speech-bubble-funny-lettering-typography-sticker-social-media-content_102918-48.jpg",
        ],
        attachments: ["https://www.africau.edu/images/default/sample.pdf"],
      },
      createdBy: {
        id: "3",
        name: "Sai Sarthak",
        profilePicture:
          "https://ih1.redbubble.net/image.4285147971.3103/mo,small,flatlay,product_square,600x600.jpg",
      },
      likedBy: [
        {
          id: "1",
          name: "Sachin",
          profilePicture:
            "https://ih1.redbubble.net/image.4285147971.3103/mo,small,flatlay,product_square,600x600.jpg",
        },
      ],
      commentedBy: [
        {
          id: "2",
          name: "Akash Nekhara",
          profilePicture:
            "https://ih1.redbubble.net/image.4285147971.3103/mo,small,flatlay,product_square,600x600.jpg",
          commentBody: "Good game",
          createdOn: "2021-01-01T07:30:00.000-0530",
          LastModifiedOn: "2021-04-01T07:30:00.000-0530",
        },
        {
          id: "3",
          name: "Shukla Sachin",
          profilePicture:
            "https://ih1.redbubble.net/image.4285147971.3103/mo,small,flatlay,product_square,600x600.jpg",
          commentBody: "Good game",
          createdOn: "2023-01-01T07:30:00.000-0530",
        },
      ],
      flaggedBy: [
        {
          id: "3",
          name: "Sachin muthuswamy venugopal Krishnagopal Iyer",
          profilePicture:
            "https://ih1.redbubble.net/image.4285147971.3103/mo,small,flatlay,product_square,600x600.jpg",
        },
      ],
      status: "published",
      hashtags: ["#heloo", "#topdoc", "#justiceForChutki"],
      mentionedPeople: [],
      language: ["English", "Hindi"],
    },
  },
  {
    3: {
      id: "3",
      postVisibility: "private",
      postFrom: "patient",
      createdOn: "2021-01-01T07:30:00.000-0530",
      LastModifiedOn: "2023-07-01T07:30:00.000-0530",
      body: {
        post: "hello this is my 3rd post",
        images: [
          "https://img.freepik.com/premium-vector/hi-word-speech-bubble-funny-lettering-typography-sticker-social-media-content_102918-48.jpg",
        ],
        attachments: ["https://www.africau.edu/images/default/sample.pdf"],
      },
      createdBy: {
        id: "3",
        name: "Sai Sarthak",
        profilePicture:
          "https://ih1.redbubble.net/image.4285147971.3103/mo,small,flatlay,product_square,600x600.jpg",
      },
      likedBy: [
        {
          id: "1",
          name: "Sachin",
          profilePicture:
            "https://ih1.redbubble.net/image.4285147971.3103/mo,small,flatlay,product_square,600x600.jpg",
        },
      ],
      commentedBy: [
        {
          id: "2",
          name: "Akash Nekhara",
          profilePicture:
            "https://ih1.redbubble.net/image.4285147971.3103/mo,small,flatlay,product_square,600x600.jpg",
          commentBody: "Good game",
          createdOn: "2021-01-01T07:30:00.000-0530",
          LastModifiedOn: "2021-04-01T07:30:00.000-0530",
        },
        {
          id: "3",
          name: "Shukla Sachin",
          profilePicture:
            "https://ih1.redbubble.net/image.4285147971.3103/mo,small,flatlay,product_square,600x600.jpg",
          commentBody: "Good game",
          createdOn: "2023-01-01T07:30:00.000-0530",
        },
      ],
      flaggedBy: [
        {
          id: "3",
          name: "Sachin muthuswamy venugopal Krishnagopal Iyer",
          profilePicture:
            "https://ih1.redbubble.net/image.4285147971.3103/mo,small,flatlay,product_square,600x600.jpg",
        },
      ],
      status: "published",
      hashtags: ["#heloo", "#topdoc", "#justiceForChutki"],
      mentionedPeople: [],
      language: ["English", "Hindi"],
    },
  },
  {
    4: {
      id: "4",
      postVisibility: "public",
      postFrom: "student",
      createdOn: "2021-01-01T07:30:00.000-0530",
      body: {
        post: "hello this is my 4th post",
        images: [
          "https://img.freepik.com/premium-vector/hi-word-speech-bubble-funny-lettering-typography-sticker-social-media-content_102918-48.jpg",
        ],
        attachments: ["https://www.africau.edu/images/default/sample.pdf"],
      },
      createdBy: {
        id: "3",
        name: "Sai Sarthak",
        profilePicture:
          "https://ih1.redbubble.net/image.4285147971.3103/mo,small,flatlay,product_square,600x600.jpg",
      },
      likedBy: [],
      commentedBy: [],
      flaggedBy: [],
      status: "draft",
      hashtags: ["#heloo", "#topdoc", "#justiceForChutki"],
      mentionedPeople: [],
      language: ["English", "Hindi"],
    },
  },
  {
    5: {
      id: "5",
      postVisibility: "private",
      postFrom: "doctor",
      createdOn: "2021-01-01T07:30:00.000-0530",
      body: {
        post: "hello this is my 1st post",
        images: [
          "https://img.freepik.com/premium-vector/hi-word-speech-bubble-funny-lettering-typography-sticker-social-media-content_102918-48.jpg",
        ],
        attachments: ["https://www.africau.edu/images/default/sample.pdf"],
      },
      createdBy: {
        id: "3",
        name: "Sai Sarthak",
        profilePicture:
          "https://ih1.redbubble.net/image.4285147971.3103/mo,small,flatlay,product_square,600x600.jpg",
      },
      likedBy: [],
      commentedBy: [],
      flaggedBy: [],
      status: "draft",
      hashtags: ["#heloo", "#topdoc", "#justiceForChutki"],
      mentionedPeople: [],
      language: ["English", "Hindi"],
    },
  },
  {
    6: {
      id: "6",
      postVisibility: "public",
      postFrom: "patient",
      createdOn: "2021-01-01T07:30:00.000-0530",
      body: {
        post: "hello this is my 1st post",
        images: [
          "https://img.freepik.com/premium-vector/hi-word-speech-bubble-funny-lettering-typography-sticker-social-media-content_102918-48.jpg",
        ],
        attachments: ["https://www.africau.edu/images/default/sample.pdf"],
      },
      createdBy: {
        id: "3",
        name: "Sai Sarthak",
        profilePicture:
          "https://ih1.redbubble.net/image.4285147971.3103/mo,small,flatlay,product_square,600x600.jpg",
      },
      likedBy: [],
      commentedBy: [],
      flaggedBy: [
        {
          id: "3",
          name: "Sachin muthuswamy venugopal Krishnagopal Iyer",
          profilePicture:
            "https://ih1.redbubble.net/image.4285147971.3103/mo,small,flatlay,product_square,600x600.jpg",
        },
      ],
      status: "published",
      hashtags: ["#heloo", "#topdoc", "#justiceForChutki"],
      mentionedPeople: [],
      language: ["English", "Hindi"],
    },
  },
  {
    7: {
      id: "7",
      postVisibility: "public",
      postFrom: "student",
      createdOn: "2021-01-01T07:30:00.000-0530",
      LastModifiedOn: "2023-07-01T07:30:00.000-0530",
      body: {
        post: "hello this is my 1st post",
        images: [
          "https://img.freepik.com/premium-vector/hi-word-speech-bubble-funny-lettering-typography-sticker-social-media-content_102918-48.jpg",
        ],
        attachments: ["https://www.africau.edu/images/default/sample.pdf"],
      },
      createdBy: {
        id: "3",
        name: "Sai Sarthak",
        profilePicture:
          "https://ih1.redbubble.net/image.4285147971.3103/mo,small,flatlay,product_square,600x600.jpg",
      },
      likedBy: [
        {
          id: "1",
          name: "Sachin",
          profilePicture:
            "https://ih1.redbubble.net/image.4285147971.3103/mo,small,flatlay,product_square,600x600.jpg",
        },
      ],
      commentedBy: [
        {
          id: "2",
          name: "Akash Nekhara",
          profilePicture:
            "https://ih1.redbubble.net/image.4285147971.3103/mo,small,flatlay,product_square,600x600.jpg",
          commentBody: "Good game",
          createdOn: "2021-01-01T07:30:00.000-0530",
          LastModifiedOn: "2021-04-01T07:30:00.000-0530",
        },
        {
          id: "3",
          name: "Shukla Sachin",
          profilePicture:
            "https://ih1.redbubble.net/image.4285147971.3103/mo,small,flatlay,product_square,600x600.jpg",
          commentBody: "Good game",
          createdOn: "2023-01-01T07:30:00.000-0530",
        },
      ],
      flaggedBy: [
        {
          id: "3",
          name: "Sachin muthuswamy venugopal Krishnagopal Iyer",
          profilePicture:
            "https://ih1.redbubble.net/image.4285147971.3103/mo,small,flatlay,product_square,600x600.jpg",
        },
      ],
      status: "published",
      hashtags: ["#heloo", "#topdoc", "#justiceForChutki"],
      mentionedPeople: [],
      language: ["English", "Hindi"],
    },
  },
];

module.exports = { post };
