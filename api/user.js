import request from '@/utils/request'
const group_name = "user"
const api_name = 'user'
export default{
    //登录 学号 密码
    loginByAccount(entity){
        return request({
            url: `/${group_name}/${api_name}/login`,
            method: "post",
            data:entity
        })
    }
}