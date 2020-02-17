import softApi from "@/api/soft"
import userApi from "@/api/user"
import {getUser} from '@/utils/auth'
export default{
    downloadFile(name, url){
        softApi.downloadFile(name, url).then(res => {
            if (res.headers["content-type"].indexOf("json") === -1) {
              // 返回的数据不是json
              var fileName = name + url.substring(url.lastIndexOf("."));
        
              const url1 = window.URL.createObjectURL(new Blob([res.data]));
              const link = document.createElement("a");
              link.href = url1;
              link.setAttribute("download", fileName);
              document.body.appendChild(link);
              link.click();
              userApi.downloads(getUser().user_id, softId);
            }else{
              //返回的是json
              this.$message({
                type:"error",
                message:"请重新登录"
              })
            }
          });
        
          // window.location.href="http://localhost:9000/soft/soft/download?name="+name+"&url="+url;
    }
}
