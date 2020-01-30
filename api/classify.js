import request from '@/utils/request'
const group_name = "classify"
const api_name = "classify"
export default{

    list(){
        return request({
            url: `/${group_name}/${api_name}/list`,
            method: 'get'
        })
    },
    

}