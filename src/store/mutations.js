/**
 * 测试远程仓库
 * mutations用来定义修改state状态的方法
 * 定义的两种方式
 * 方式一:
 * 1.const 名称 = {}
 * 2.名称[key] = (state，payload)=>{
 *    自定义修改state的函数
 * }
 * 名称[key2] = (state,payload) =>{
 *   自定义修改state的函数
 * }
 *....
 *方式二:
 * const 名称 ={
 *   [key1](state,payload){
 *     自定义修改state的函数
 *   }
 *   [key2](state,payload){
 *     自定义修改的state的函数
 *   }
 * }
 */
import types from './mutation-types'

/**
 * 方式一
 * @type {{}}
 */
const mutations = {}
mutations[types.TEST_MUTATION_TYPE] = (state, arg) => {
  state.msg = '这是更改state更改后的数据'
}

mutations[types.TEST_INCREMENT] = (state, index) => {
  state.selectedIndex = index
}

mutations[types.TEST_MUTATION_TYPE2] = (state, index) => {
  state.selectedIndex2 = index
}

mutations[types.TEST_CHANGEIDNEX] = (state, index) => {
  state.selectedIndex2 = index
}

/**
 * 更改已被存储的tab
 */
mutations[types.CHANGE_TABLIST] = (state, payLoad) => {
  console.log(`进入${types.CHANGE_TABLIST}方法==========`, payLoad)
  state.editableTabs.tabs.push(payLoad)
}

/**
 * 用来提交数据到state，保存从后端获取到的菜单数据
 * @param state
 * @param payLoad
 */
const MENU = types.MENU
mutations[types.SAVE_MENUDATA] = (state, payLoad) => {
  console.log('更改前的菜单数据为:', state.menuData)
  state.menuData = payLoad
  console.log('更改后的菜单数据为:', state.menuData)
}
mutations[MENU.MENU_SET_HEADER] = (state, payLoad) => { // 设置菜单头
  console.log('通过闭包函数得到的字符串为:', MENU.MENU_SET_HEADER)
  state.MENUSTATE.menuHeader.data = payLoad
  console.log('state此时的数据结构为:', state)
}

/**
 * 方式二
 * @type {{}}
 */
// eslint-disable-next-line no-unused-vars
const myMutations2 = {
  [types.TEST_MUTATION_TYPE2] (state, arg) {
    state.obj.name = '这是更改obj后的name的名称'
  }
}

// eslint-disable-next-line no-unused-vars
const myMutations3 = {
  'abc' (state) {
    state.obj.name = '这是更改obj后的name的名称'
  }
}

export default {
  mutations
}
