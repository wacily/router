export let api = {
    //公共接口
    login:"/user/login",
    register:"/user/register",
    logout:"/user/logout",
    repasswd:"/user/repasswd",

    //用户相关
    getUser:"/user/get",
    getAll:"http://172.20.0.130/user/list",

    //权限相关
    getMenu:"/auth/menu"
}