// 导入axios依赖
import axios from 'axios'
// 导入element-ui的消息框组件,使用了element-ui的部分导入特性
import {Message} from 'element-ui'
import router from '../router'

/**
 * 响应拦截器
 */
axios.interceptors.response.use(success => {
  // 1.成功调用后端接口，成功返回了数据但后端业务逻辑报错
  // eslint-disable-next-line eqeqeq
  if (success.status && success.status == 200) {
    // eslint-disable-next-line eqeqeq
    if (success.data.code == 500 || success.data.code == 401 || success.data.code == 400) {
      Message.error({message: success.data.message})
      return
    }
    // 当后端系统不存在业务逻辑错误，即为成功，此时suceess.data.message是否有数据，比如插入成功显示插入成功，更新显示更新成功
    if (success.data.message) {
      Message.success({message: success.data.message})
    }
  }
  // 成功后返回data对象
  return success.data
  // 如果连后端接口都无法访问到即为error
// eslint-disable-next-line handle-callback-err
}, error => {
  // 因为连后端接口都无法访问到只能由前端给出友好提示
  // eslint-disable-next-line eqeqeq
  if (error.response.code == 504 || error.response.code == 404) {
    Message.error({message: '服务器被吃了o(╯□╰)o'})
    // eslint-disable-next-line eqeqeq
  } else if (error.response.code == 403) {
    Message.error({message: '权限不足，请联系管理员!'})
    // eslint-disable-next-line eqeqeq
  } else if (error.response.code == 401) {
    Message.error('尚未登录，请登录')
    router.replace('/')
  } else {
    // 如果判断不在504、404、403和401等状态码之内判断它自己是否有返回错误信息，如果没有则提示未知错误
    if (error.response.data.message) {
      Message.error({message: error.response.data.message})
    } else {
      Message.error({message: '未知错误'})
    }
  }
})

let base = ''
// 传送json格式的post请求
export const postRequest = (url, params) => {
  return axios({
    // eslint-disable-next-line no-undef
    method: 'post',
    // eslint-disable-next-line no-undef
    url: `${base}${ulr}`,
    params: params
  }
  )
}
