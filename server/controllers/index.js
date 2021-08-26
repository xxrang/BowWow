module.exports = {
    auth: require('./users/Auth'),
    signup: require('./users/SignUp'),
    login: require('./users/Login'),
    signout: require('./users/SignOut'),
    email_check: require('./check/email_check'),
    profile: require('./users/Profile'),
    nickname: require('./check/nickname'),
    service_list: require('./posts/Service_list'),
    volunteer_list: require('./posts/Volunteer_list'),
    post_delete: require('./posts/Post_delete'),
    comments: require('./comment/comments'),
    search: require('./posts/Search')
}