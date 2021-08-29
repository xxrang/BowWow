export const initialPosts = {
  service: [
    {
      id: 1, // servc? volunter,
      User: {
        id: 1,
        email: "",
        nickname: "",
        image: "",
      },
      Image: "./images/dogSample.jpeg", //db따로, 배열형태, 여러개일경우.
      title: "",
      date: "",
      location: "",
      mobile: "",
      content: "쑥이의 강아지1",
      createdAt: "",
      category: "",
      Comment: [
        {
          User: {
            id: "1",
            nickname: "숙영",
            image: "./images/dogSample.jpeg",
          },
          content: "ㅁㄴㅇㄹ",
        },
        {
          User: {
            id: "2",
            nickname: "용준",
            image: "./images/dogSample.jpeg",
          },
          content: "ㅇㅇㅇㅇ",
        },
      ],
    },
    {
      id: 2,
      Image: "./images/dogSample.jpeg",
      content: "쑥이의 강아지2",
    },
    {
      id: 3,
      Image: "./images/dogSample.jpeg",
      content: "쑥이의 강아지3",
    },
    {
      id: 4,
      Image: "./images/dogSample.jpeg",
      content: "쑥이의 강아지4",
    },
    {
      id: 5,
      Image: "./images/dogSample.jpeg",
      content: "쑥이의 강아지5",
    },
    {
      id: 6,
      Image: "../images/bros_blank.jpg",
      content: "쑥이의 강아지6",
    },
    {
      id: 7,
      Image: "./images/dogSample.jpeg",
      content: "쑥이의 강아지7",
    },
    {
      id: 8,
      Image: "../images/bros_blank.jpg",
      content: "쑥이의 강아지8",
    },
    {
      id: 9,
      Image: "./images/dogSample.jpeg",
      content: "쑥이의 강아지9",
    },
    {
      id: 10,
      Image: "./images/dogSample.jpeg",
      content: "쑥이의 강아지10",
    },
    {
      id: 11,
      Image: "./images/dogSample.jpeg",
      content: "쑥이의 강아지11",
    },
    {
      id: 12,
      Image: "./images/dogSample.jpeg",
      content: "쑥이의 강아지12",
    },
    {
      id: 13,
      Image: "./images/dogSample.jpeg",
      content: "쑥이의 강아지13",
    },
  ],
  volunteer: [
    {
      id: 1, // servc? volunter,
      User: {
        id: 1,
        email: "",
        nickname: "",
        image: "",
      },
      Image: "./images/dogSample.jpeg", //db따로, 배열형태, 여러개일경우.
      title: "",
      date: "",
      location: "",
      mobile: "",
      content: "준이의 봉사활동 1",
      createdAt: "",
      category: "",
      Comment: [
        {
          User: {
            id: "1",
            nickname: "숙영",
            image: "./images/dogSample.jpeg",
          },
          content: "ㅁㄴㅇㄹ",
        },
        {
          User: {
            id: "2",
            nickname: "용준",
            image: "./images/dogSample.jpeg",
          },
          content: "ㅇㅇㅇㅇ",
        },
      ],
    },
    {
      id: 2,
      Image: "./images/dogSample.jpeg",
      content: "준이의 봉사활동 2",
    },
    {
      id: 3,
      Image: "./images/dogSample.jpeg",
      content: "준이의 봉사활동 3",
    },
    {
      id: 4,
      Image: "./images/dogSample.jpeg",
      content: "준이의 봉사활동 4",
    },
    {
      id: 5,
      Image: "./images/dogSample.jpeg",
      content: "준이의 봉사활동 5",
    },
    {
      id: 6,
      Image: "../images/bros_blank.jpg",
      content: "준이의 봉사활동 6",
    },
    {
      id: 7,
      Image: "./images/dogSample.jpeg",
      content: "준이의 봉사활동 7",
    },
    {
      id: 8,
      Image: "../images/bros_blank.jpg",
      content: "준이의 봉사활동 8",
    },
    {
      id: 9,
      Image: "./images/dogSample.jpeg",
      content: "준이의 봉사활동 9",
    },
    {
      id: 100,
      Image: "./images/dogSample.jpeg",
      content: "준이의 봉사활동 100",
    },
    {
      id: 1000,
      Image: "./images/dogSample.jpeg",
      content: "준이의 봉사활동 1000",
    },
    {
      id: 10000,
      Image: "./images/dogSample.jpeg",
      content: "준이의 봉사활동 10000",
    },
    {
      id: 100000,
      Image: "./images/dogSample.jpeg",
      content: "준이의 봉사활동 100000",
    },
  ],
};

export const dummyUser = {
  id: "",
  nickname: "",
  email: "",
  introduce: "",
  image: "",
  posts: [],
};

// 로그인이 되어있냐 안되어있냐, 상태관리더미
export const initialState = {
  isLogedIn: false,
  user: null,
};

export const dummyPosts = {
  id: 2,
  content: "",
  User: {
    id: 1,
    nickname: "",
    image: "",
  },
  Image: "./images/dogSample.jpeg",
  Comment: [],
};
