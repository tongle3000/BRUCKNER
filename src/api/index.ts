import axios from 'axios';

const request = axios.create({
    baseURL: 'http://192.168.50.252:81/api/'
    // baseURL: 'http://api.cpengx.cn/metashop/api'
})

export const getLineState = (params:any) => {
    return request({
        method: 'GET',
        url: 'productiondata/2046/line/state',
        params // 用来配置query的参数 ?query=xxx
    })
}

/**
 * 厚度剖面曲线数据
 * @param params 
 * @returns 
 */
// http://192.168.50.252:81/api/tce/rest/line/2046/devices/scanner/ThgPur/data/profile-4scan-latest
export const getProfile4scanLatest = (params?:any) => {
    return request({
        method: 'GET',
        url: 'tce/rest/line/2046/devices/scanner/ThgPur/data/profile-4scan-latest',
        params // 用来配置query的参数 ?query=xxx
    })
}


// 响应拦截器（就是接口请求到的数据，过滤只要自己的数据，去掉config headers request...）
request.interceptors.response.use(
    // 能响应
    (response) => {
        // 如果状态码是200，只返回data
        if(response.status == 200) {
            return response.data;
        } else { // 如果不是全部返回
            return response;
        }
    },
    // 不能响应 报错的
    error => Promise.reject(error)
)