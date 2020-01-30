import axios from 'axios'
import {getUser} from "@/utils/auth"
//创建axios实例
const service = axios.create({
    baseURL: 'http://localhost:9000/',
    timeout: 30000,//请求超时时间,
    headers:{'Authorization':'Bearer'+getUser().user_token}//请求头携带token
});
export default service