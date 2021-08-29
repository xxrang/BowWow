export const initialPosts = {  
  MainPosts : [
    {
      id: 1, // servc? volunter,
      User : 
      {
        id: 1,
        email : '',
        nickname : '',
        image : '',
      },
      Image:'./images/dogSample.jpeg', //db따로, 배열형태, 여러개일경우.
      title : '',
      date : '',
      location : '',
      mobile : '',
      content : '쑥이의 강아지',
      createdAt : '',
      category : '',
      Comment : [
      {
        User : {
          id : 1,
          nickname : '닉네임',
          image : './images/dogSample.jpeg',
        },
        content : '',
      },
      ]
    },
    { 
      tempId : 2,
      Image:'./images/dogSample.jpeg',
      content : '쑥이의 강아지',
    },
    {
      tempId : 3,
      Image:'./images/dogSample.jpeg',
      content : '쑥이의 강아지',
    },
    { 
      tempId : 4,
      Image:'./images/dogSample.jpeg',
      content : '쑥이의 강아지',
    },
    {
      tempId : 5,
      Image:'./images/dogSample.jpeg',
      content : '쑥이의 강아지',
    },
    { 
      tempId : 6,
      Image:'./images/dogSample.jpeg',
      content : '쑥이의 강아지',
    },
    {
      tempId : 7,
      Image:'./images/dogSample.jpeg',
      content : '쑥이의 강아지',
    },
    { 
      tempId : 8,
      Image:'./images/dogSample.jpeg',
      content : '쑥이의 강아지',
    },
    {
      tempId : 9,
      Image:'./images/dogSample.jpeg',
      content : '쑥이의 강아지',
    },
    { 
      tempId : 10,
      Image:'./images/dogSample.jpeg',
      content : '쑥이의 강아지',
    },
    {
      tempId : 11,
      Image:'./images/dogSample.jpeg',
      content : '쑥이의 강아지',
    },
    { 
      tempId : 12,
      Image:'./images/dogSample.jpeg',
      content : '쑥이의 강아지',
    },
    {
      tempId : 13,
      Image:'./images/dogSample.jpeg',
      content : '쑥이의 강아지',
    }
  ],
}

export const dummyUser = {
    id : '',
    nickname : '',
    email : '',
    introduce : '',
    image : '',
    posts : [], 
}

// 로그인이 되어있냐 안되어있냐, 상태관리더미
export const initialState = {
  isLogedIn : false,
  user : null,
}

export const dummyPosts = {
  id : 2,
  content : '',
  User : {
    id : 1,
    nickname : '',
    image : ''
  },
  Image : './images/dogSample.jpeg',
  Comment : []
}
