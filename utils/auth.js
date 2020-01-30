import Cookies from "js-cookie"

const user_token = "user_token" //token
const user_name = "user_name" //用户名

//将token信息存入cookie
export function setUser(token, name) {
    Cookies.set(user_token, token);
    Cookies.set(user_name, name);
}

//从cookie中获取用户信息
export function getUser() {
    return {
        user_name: Cookies.get(user_name),
        user_token: Cookies.get(user_token)
    }
}

//删除用户信息
export function removeUser() {
    Cookies.remove(user_name);
    Cookies.remove(user_token)
}