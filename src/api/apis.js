import { getBaseUrl } from "./baseUrl"

// 获取配置的不同环境的域名
let baseUrl = getBaseUrl().APIURL

export default {
    
    // 登录模块
    login: baseUrl + 'xxxxxxx',//登录
    getCode: baseUrl + 'xxxxxxx',//获取验证码

}

