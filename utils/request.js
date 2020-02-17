import axios from 'axios'
import {getUser} from "@/utils/auth"
//创建axios实例
const service = axios.create({
    baseURL: 'http://localhost:9000/',
    timeout: 30000,//请求超时时间,
    headers:{'Authorization':'Bearer '+getUser().user_token}//请求头携带token
});

service.interceptors.request.use(
    config => {
      // do something before request is sent
      if (getUser().user_token!=undefined) {
        // let each request carry token
        // ['X-Token'] is a custom headers key
        // please modify it according to the actual situation
        config.headers['token'] = 'Bearer '+getUser().user_token
      }
      return config
    },
    error => {
      // do something with request error
      console.log("error11111:"+error) // for debug
      return Promise.reject(error)
    }
  )


export default service 