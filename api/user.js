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
    },
    //根据用户id查询
    findById(id){
        return request({
            url: `/${group_name}/${api_name}/${id}`,
            method: "get",
          
        })
    },
    //点赞软件
    thumb(userId,softId){
        return request({
            url: `/${group_name}/${api_name}/thumb/${userId}/${softId}`,
            method: "post",
          
        })
    },
   

    //下载软件，更新用户的下载软件列表
    downloads(userId,softId){
        return request({
            url: `/${group_name}/${api_name}/downloads/${userId}/${softId}`,
            method: "post",
          
        })
    },
    //根据用户id和软件id获取实体
    getUserSoftThu(userId,softId){
        return request({
            url: `/${group_name}/${api_name}/getUserSoftThu/${userId}/${softId}`,
            method: "get",
          
        })
    }
}