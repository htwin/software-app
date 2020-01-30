import request from '@/utils/request'
const group_name = "soft"
const api_name = 'soft'
export  default{ 
    newList(page,size){
        return request({
            url:`/${group_name}/${api_name}/newList/${page}/${size}`,
            method: 'get'
        })
    },
    hotList(page,size){
        return request({
            url:`/${group_name}/${api_name}/hotList/${page}/${size}`,
            method: 'get'
        })
    },
    //下载软件
    download(soft){
        return request({
            url: `/${group_name}/${api_name}/download/`,
            method: "post",
            data: soft
        })
    },
    //根据类别查询软件列表
    findByClassifyId(classifyId,page,size){
        return request({
            url: `/${group_name}/${api_name}/${classifyId}/${page}/${size}`,
            method: "get"
        })
    },
    //根据id查询软件详情内容
    findById(id){
        return request({
            url: `/${group_name}/${api_name}/${id}`,
            method: "get"
        })
    }
}