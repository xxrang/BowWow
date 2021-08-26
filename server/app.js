const express = require("express");
const cors = require('cors')
const cookieParser = require('cookie-parser');
//express의 req객체에 cookies 속성 부여
const app = express();
const port = 80;
require('dotenv').config();
//env 환경변수 읽어냄

const controllers = require('./controllers');

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
//req에 body 속성 추가해서 req.body 접근 가능하게 하고 중첩된 객체 표현 허용 x 객체 안에 객체 파싱할 수 있게 하려면 true로 변경

app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET','POST','OPTIONS','DELETE','PATCH']
}))

app.use(cookieParser());


app.get("/", (req, res) => {
  res.send("Hello World!");
});


/** 유저 관련 API **/
app.post('/users/signup', controllers.signup); //회원가입
app.post('/users/login', controllers.login); //로그인
app.post('/users/logout', controllers.signout); //로그아웃
app.get('/email_check', controllers.email_check); //이메일 중복확인
app.get('/nickname', controllers.nickname); //닉네임 중복확인

/** 유저 마이페이지 API **/
app.get('/profile', controllers.profile); //마이페이지 확인
app.patch('/profile', controllers.profile); //마이페이지 수정

/** 인증 API **/
app.get('/auth', controllers.auth); //토큰 인증 관련

/** 지도 API **/
app.get('/shelter', controllers.search); //지도 API

/** 유기견 관련 API */
app.get('/posts/service_list', controllers.service_list); //유기견 게시글 전체 혹은 하나만 보여주기
app.post('/posts/service_list', controllers.service_list); //유기견 게시글 작성하기

/** 봉사일정 관련 API */
app.get('/posts/volunteer_list', controllers.volunteer_list); //봉사일정 게시글 전체 혹은 하나만 보여주기
app.post('/posts/volunteer_list', controllers.volunteer_list); //봉사일정 게시글 작성하기
app.delete('/posts', controllers.post_delete); //게시글 삭제

/** 댓글 API **/
app.post('/comments', controllers.comments); //댓글 작성
app.delete('/comments', controllers.comments); //댓글 삭제
app.patch('/comments', controllers.comments); //댓글 수정

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
