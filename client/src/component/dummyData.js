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
      content : '',
      createdAt : '',
      category : '',
      Comment : [
      {
        User : {
          id : '1',
          nickname : '숙영쓰',
          image : './images/dogSample.jpeg',
        },
        content : 'ㅁㄴㅇㄹ',
      },
      {
        User : {
          id : '2',
          nickname : '용준',
          image : './images/dogSample.jpeg'
        },
        content : 'ㅇㅇㅇㅇ',
      }
      ]
    },
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
  Comment : [
    
  ]
}