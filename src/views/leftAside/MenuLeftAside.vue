<!--该组件用来模拟新智享的侧边栏-->
<template>
  <div>
    <el-button @click="addNextMenu('E000')">测试增加菜单</el-button>
    <el-button @click="addNextMenu2">测试增加菜单</el-button>
    <el-menu @open="addNextMenu">
      <!--      二级菜单展示 subItem是一个对象-->
      <div v-for="subItem in menuLeftAside[0].children" :key="subItem.id">
        <el-submenu :index="subItem.id" v-if="subItem.itemFlag === '0'">
          <template slot="title">
            <span>{{ subItem.name }}</span>
          </template>
          <!--      二级菜单展示 thirdItem是一个对象-->
          <div v-for="thirdItem in subItem.children" :key="thirdItem.id">
            <el-menu-item :index="thirdItem.id" v-if="thirdItem.itemFlag === '1'" @click="gotoMenu(thirdItem.id)">
              {{ thirdItem.name }}
            </el-menu-item>
          </div>
        </el-submenu>
        <el-menu-item :index="subItem.id" v-if="subItem.itemFlag === '1'">
          {{ subItem.name }}
        </el-menu-item>
      </div>
      <!--            <div>--><!--              <el-submenu index="111">-->
      <!--                <template slot="title">-->
      <!--                  <span>aaaaa</span>-->
      <!--                </template>-->
      <!--              </el-submenu>-->
      <!--              <el-menu-item  index="2222">-->
      <!--                bbb-->
      <!--              </el-menu-item>-->
      <!--            </div>-->
    </el-menu>
  </div>
</template>

<script>
import TYPES from '../../store/mutation-types'
import axios from 'axios'
import {withNameSpace} from '../../store/namespace'

export default {
  name: 'MenuLeftAside',
  data () {
    return {
      menuLeftAside: ''
    }
  },
  methods: {
    addNextMenu2 () {
      const withTestSpace = withNameSpace('test')
      const str = withTestSpace('1221')
      console.log(str)
    },
    test () {
      alert('test')
    },
    gotoMenu (itemId) {
      console.log('this', this.$vnode)
      this.$store.state.itemId = itemId
      this.$router.push(`/frameWork/msc/${itemId}`)
    },
    addNextMenu (menuId) {
      console.log('增加前的菜单:', this.$store.state.menuData)
      const menuItem = this.gotoSearch(menuId, this.$store.state.menuData)
      if (menuItem.children.length === 0) { // 如果该menuItem.children.length
        console.log('开始请求接口获取该菜单下的子菜单并将菜单存入menuData中....')
        menuItem.children.push({
          'id': 'S001',
          'name': '三级菜单02',
          'itemFlag': '1',
          'url': 'http://www.bilibili.com',
          'children': []
        })
      }
      console.log('增加后的菜单:', this.$store.state.menuData)
    },
    /**
     * 根据菜单id递归遍历报文，返回指定的menu对象
     * @param menuId
     */
    gotoSearch (menuId, menus) {
      // eslint-disable-next-line no-unused-vars
      for (const menu of menus) {
        if (menu.id === menuId) {
          console.log('找到的菜单为:', menu)
          return menu
        }
        if (menu.children && menu.children.length) {
          // 如果这个菜单下还有子菜单则递归继续遍历菜单
          // eslint-disable-next-line no-unused-vars
          const menuObj = this.gotoSearch(menuId, menu.children)
          if (menuObj) {
            return menuObj
          }
        }
      }
      return null
    }
  },
  mounted () {
    // eslint-disable-next-line no-unused-vars
    const url = 'http://127.0.0.1:8099/menucreate/queryAllMenu'
    // eslint-disable-next-line no-unused-vars
    const params = ''
    axios.post(url, params).then(response => {
      // 获取服务器返回的数据
      const menuDate = response.data
      console.log('后端返回的数据为:', response.data)
      this.$store.commit(TYPES.SAVE_MENUDATA, menuDate)
      console.log('侧边栏获取到的数据为:', this.$store.state.menuData)
      this.menuLeftAside = this.$store.state.menuData
      console.log('子菜单为:', this.menuLeftAside[0].children)
      console.log('三级子菜单为:', this.menuLeftAside[0].children[0].children)
    }).error(error => {
      alert(error)
      console.log(error)
    }).catch()
  }
}

</script>

<style scoped>

</style>
