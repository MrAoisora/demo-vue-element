/**
 * 1.Vuex的状态存储是响应式的。当Vue 组件从 Store 中读取状态的时候，若 Store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
 * 2.不能直接改变 Store 中的状态。改变Store 中的状态的唯一途径就是显式地提交 mutation。
 * 3.每一个Vuex应用的核心就是Store（仓库），我们可以说Store是一个容器，Store里面的状态与单纯的全局变量是不一样的，
 *   无法直接改变Store中的状态。想要改变Store中的状态，只有一个办法，显式地提交mutation。
 */
import Vuex from 'vuex'
import Vue from 'vue'
import state from './state'
import actions from './actions'
import mutations from './mutations'

/**
 * index.js用来生成store容器，并作为组件导出
 */
Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  actions,
  ...mutations
})

export default store
