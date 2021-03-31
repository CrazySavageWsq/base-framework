import axios from "axios"


// 基础配置
const service = axios.create({
    baseURL: '',
    timeout: 10000
});


// 网络请求前拦截配置
service.interceptors.request.use(
    config => {

        // 设置请求头 tooken 之类的
        config.headers["Authorization"] = "Bearer " + 'xxxxxx';
      
    },

    error => {
        return Promise.reject(error)
    }

);

// 网络数据返回前配置
service.interceptors.response.use(
    response => {
        const res = response; //正常返回
        return res
    },
    error => {
        return Promise.reject(error)
    }
);



// 参数拼接
var serialize = function (obj) {
    var str = "";
    if (obj == null || obj == undefined) {
        return str
    }

    Object.keys(obj).forEach(function (key) {
        str += `${key}=${obj[key]}&`;
    });

    return str.trimRight('&');
}



// 请求发起
const request = (type, url, params) => {
    
    return new Promise((resolve, reject) => {

        switch (type) {
            
            // get 方法
            case "get":
                service.get(url,{
                    params
                }).then(res => {
                    resolve(res.data)
                    
                }).catch(error => {
                    reject(error)
                    this.$message.error("网络异常")
                })
                break;
            
            // post 常规(form-data)
            case "post":
                service.defaults.headers = {
                    'Content-Type': 'application/x-www-form-urlencoded'
                };
                params = serialize(params)
                service.post(url, params).then(res => {
                    resolve(res.data)
                    
                }).catch(error => {
                    reject(error)
                    this.$message.error("网络异常")
                })
                break;
            
              // post json
              case "json":
                service.defaults.headers = {
                    'Content-Type': 'application/json'
                };
                service.post(url, params).then(res => {
                    resolve(res.data)
                    
                }).catch(error => {
                    reject(error)

                    this.$message.error("网络异常")
                })
                break;
        }
        
    })
}

export default {
    request,
}