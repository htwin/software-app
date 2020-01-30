import request from '@/utils/request'
const group_name = "tutorial"
const api_name = 'tutorial'
export default{

    //根据软件id查询教程
    findBySoftwareId(softwareId){
        return request({
            url: `/${group_name}/${api_name}/${softwareId}`,
            method: "get"
        })
    }

}