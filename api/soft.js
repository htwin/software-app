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
    },
    //查询用户点赞的软件列表
    userThumb(userThumb){
        return request({
            url: `/${group_name}/${api_name}/userThumb/${userThumb}`,
            method: "get"
        })
    },
    //查询用户下载过的软件列表
    userDownload(userDownload){
        return request({
            url: `/${group_name}/${api_name}/userDownload/${userDownload}`,
            method: "get"
        })
    },
     //软件列表  支持模糊查询
    search(page,size,entity){
        return request({
            url: `/${group_name}/${api_name}/search/${page}/${size}`,
            method: "post",
            data:entity
        })
    },
     //下载软件
     downloadFile(name,url){
        return request({
            url: `/${group_name}/${api_name}/download?name=${name}&url=${url}`,
            method: "get",
            responseType:'blob'
          
        })
    },
    //评分软件
    doRate(userSoftDownload){
        return request({
            url: `/${group_name}/${api_name}/doRate`,
            method: "post",
            data: userSoftDownload
        })
    }
    
}