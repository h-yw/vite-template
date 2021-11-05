/**
 * @author mr.hou
 * @date 2021/11/05
 * @description 公共接口
 */
import request from '@/utils/request'; 
export default{
    // 测试接口
    getTest(data:any){
       return request({
            url: '/api/test/get',
            method: 'get',
            data
        })
    },
    postTest(params:any){
        return request({
            url: '/api/test/post',
            method: 'post',
            params
        })
    }
}