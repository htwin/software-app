import request from '@/utils/request'
const group_name = "carousel"
const api_name = "carousel"
export default{

    //轮播图列表
    list(){
        return request({
            url: `/${group_name}/${api_name}/list`,
            method: 'get'
        })
    },

}