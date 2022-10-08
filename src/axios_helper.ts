/**
 * axios 封装
 * @refer https://juejin.cn/post/7124573626161954823
 */
interface axios { }

const get = (axios: any, url: string, params: any) => new Promise(resolve => {
  axios.get(url, { params }).then()
})
const post = () => { }


export const axios_helper = (axios: any, config: any) => {
  return {

  }
}