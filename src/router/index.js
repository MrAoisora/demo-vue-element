import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'
import Page from '../views/page'
import Page2 from '../views/page2'
import dashBoard from '../views/DashBoard'
// import framework from '../views/FrameWork'
import framework from '../views/frame'
import msc from '../router/msc'
import main from '../views/main/NewAppMain'

Vue.use(Router)
// 路由设置
export default new Router({

  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      children: []
    },
    {
      path: '/frameWork',
      name: 'frameWork',
      component: framework,
      meta: '首页', // 此处是标签显示的名字
      children: [
        {
          path: 'main',
          name: main,
          component: main,
          meta: {
            keepalive: false,
            key: ''
          },
          beforeEnter: (to, from, next) => {
            to.meta.key = Math.random() // 在进入路由前动态修改metakey，保持唯一性
            next()
          }
        },
        {
          path: 'page',
          name: 'Page',
          component: Page
        },
        {
          path: 'page2',
          name: 'Page2',
          component: Page2
        },
        {
          path: 'dashBoard',
          name: 'dashBoard',
          component: dashBoard
        },
        /**
         * 使用扩展运算符...解构
         * 恒等于{
         *    {
                  path: 'msc/:itemId',
                  component: page2,
                  meta: {title: 'msc'}
              }
         * }
         */
        ...msc
      ]
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'page',
          name: 'Page',
          component: Page
        },
        {
          path: 'page2',
          name: 'Page2',
          component: Page2
        },
        {
          path: 'dashBoard',
          name: 'dashBoard',
          component: dashBoard
        }
      ]
    }
  ]
})
