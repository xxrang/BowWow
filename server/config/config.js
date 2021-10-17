module.exports = {
    development: {
      port:process.env.DATABASE_PORT,
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE_NAME,
      host: process.env.HOST,
      dialect: 'mysql',
      accessKeyId:process.env.access,
      secretAccessKey:process.env.secret,
      region: "ap-northeast-2",
      ACCESS_SECRET: process.env.ACCESS_SECRET,
      REFRESH_SECRET: process.env.REFRESH_SECRET
    }
}