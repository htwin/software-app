import request from '@/utils/request'
const group_name = "comment"
const api_name = "comment"
export default{

    //评论列表   
    search(softwareId,parentId,page,size){
        return request({
            url:`/${group_name}/${api_name}/search/${softwareId}/${parentId}/${page}/${size}`,
            method:"get"
        })
    },
    //添加评论
    addComment(comment){
        return request({
            url: `/${group_name}/${api_name}/add`,
            method: "post",
            data: comment

        })
    }

}