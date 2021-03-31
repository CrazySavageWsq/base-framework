export default {
    
    getBaseUrl,
}

// 配置不同环境下不同的域名
export function getBaseUrl () {
    
    const BASE = {}

    if (process.env.NODE_ENV === 'development') { //测试环境

        BASE.APIURL = ''
        
    }else if (process.env.NODE_ENV === 'uat') {//uat环境

        BASE.APIURL = ''
        
    }else if (process.env.NODE_ENV === 'production') {//正式环境

        BASE.APIURL = ''
        
    } else { // 其它
        BASE.APIURL = ''
    }

    return BASE
    
}