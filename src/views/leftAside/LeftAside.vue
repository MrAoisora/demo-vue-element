<template>
  <div class="leftAsideBox" id="leftAside">
    <el-button @click="openSubMenu" style="height: 20px;width: 50px">test展开submenu</el-button>
    <el-button @click="changeIndex" style="height: 20px;width: 50px">改变被选中的index</el-button>
    <el-menu :default-active="navselected" ref="testtest">
      <el-menu-item index="1" ref="elSubmenu">
        <template slot="title">
          <span @click="gotoMenu(url3)">首页</span>
        </template>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <span>会员管理</span>
        </template>
        <el-submenu index="TEST20001">
          <template slot="title">
            <span>可展开的三级菜单</span>
          </template>
          <el-menu-item>测试四级菜单</el-menu-item>
        </el-submenu>
        <el-menu-item index="2-1" @click="gotoMenu(url)">
          会员列表
        </el-menu-item>
        <el-menu-item index="2-2" @click="gotoMenu(url2)">
          会员维护
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <span>视频管理</span>
        </template>
        <el-menu-item index="3-1" @click="gotoMenu(url)">视频列表</el-menu-item>
        <el-menu-item index="3-2" @click="gotoMenu(url2)">视频上下架</el-menu-item>
        <el-menu-item index="3-3" @click="gotoSearch('W000',menuAside)">视频审核</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <span>系统设置</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="4-1">选项1</el-menu-item>
          <el-menu-item index="4-1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="4-2-1">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="5">
          <template slot="title">选项4</template>
          <el-menu-item index="5-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'LeftAside',
  data () {
    return {
      navselected: '',
      url: '/frameWork/page',
      url2: '/frameWork/page2',
      url3: '/frameWork/dashBoard',
      menuAside: [
        {
          id: 'Y000',
          name: '一级菜单01',
          itemFlag: '1',
          url: '',
          child: [
            {
              id: 'E000',
              name: '二级菜单01',
              itemFlag: '1',
              url: '',
              child: [
                {
                  id: 'S000',
                  name: '三级菜单01',
                  itemFlag: '1',
                  url: '',
                  child: [
                    {
                      id: 'F000',
                      name: '四级菜单01',
                      itemFlag: '1',
                      url: '',
                      child: [
                        {
                          id: 'W000',
                          name: '五级菜单01',
                          itemFlag: '0',
                          url: '',
                          child: [
                            {
                              id: 'W0001',
                              name: '五级菜单tab01',
                              itemFlag: '1',
                              url: 'www.baidu.com',
                              child: []
                            },
                            {
                              id: 'W0002',
                              name: '五级菜单tab02',
                              itemFlag: '1',
                              url: 'www.bilibli.com',
                              child: []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    changeIndex () {
      this.navselected = '4-1'
    },
    openSubMenu () {
      console.log('testtest可以使用的方法有:', this.$refs.testtest)
      this.$refs.testtest.open(this.$store.state.selectedIndex2)
    },
    gotoMenu (url) {
      this.$router.push({path: url})
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
        if (menu.child && menu.child.length) {
          // 如果这个菜单下还有子菜单则递归继续遍历菜单
          // eslint-disable-next-line no-unused-vars
          this.gotoSearch(menuId, menu.child)
        }
      }
      return null
    }
  },
  /**
   * 添加侧边栏监听器，监听state的数据改变，自动展开对应的sub-menu
   */
  watch: {
    '$store.state.selectedIndex2' () {
      console.log('侧边栏组件监听到state的改变,并自动展开了对应的sub-menu...')
      this.openSubMenu()
    }
  }
}
</script>

<style scoped lang="scss">
* {
  overflow: hidden;
}
</style>
