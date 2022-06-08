<template>
  <div id="frame_Container">
    <el-button @click="checkState" style="height: 20px;width: 100px">查看state</el-button>
    <!--    <el-button @click="openTab({title:'test',path:'test'})" style="height: 20px;width: 100px">测试openTab</el-button>-->
    <!--    <el-button @click="openTab({title:'test2',path:'test2'})" style="height: 20px;width: 100px">测试openTab</el-button>-->
    <appheader></appheader>
    <el-container>
      <appleftAside></appleftAside>
      <el-main style="padding: 20px">
        <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab" @tab-click="handleClick">
          <el-tab-pane
            v-for="(item) in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          >
          </el-tab-pane>
        </el-tabs>
        <!--        <appMiain></appMiain>-->
        <keep-alive>
          <router-view :key="checkKey()" v-if="this.$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view :key="checkKey()" v-if="!this.$route.meta.keepAlive"></router-view>
        <!--        <keep-alive>-->
        <!--          <router-view :key="checkKey()" v-show=changeFlag ref="routerView"></router-view>-->
        <!--        </keep-alive>-->
      </el-main>
    </el-container>
  </div>
</template>

<script>
import appleftAside from '../leftAside/NewMenuLeftAside'
import appheader from '../head/NewHead'
import appMiain from '../main/NewAppMain'
import TYPES from '../../store/mutation-types'

export default {
  name: 'framework',
  components: {
    appleftAside,
    appheader,
    appMiain
  },
  watch: {
    // 监听路由变化后新增tab页
    '$route': {
      handler (to, from) {
        console.log('=======================监听到路由变化===================', to)
        // this.addTab('测试' + Math.random())
        this.openTab({title: to.params.itemId, path: to.path})
      }
    }
  },
  data () {
    return {
      changeFlag: false,
      componentsArr: [],
      editableTabsValue: '2',
      editableTabs: [],
      tabIndex: 2
    }
  },
  methods: {
    /**
     * 查看state
     */
    checkState () {
      console.log('state = ', this.$store.state)
      console.log('this====', this)
    },
    /**
     * 动态生成router-view的key值
     * @returns {string|*}
     */
    checkKey () {
      if (!this.$route.meta.keepAlive) {
        console.log('this.$route=', this.$route)
        return this.$route.meta.key
      }
      console.log('this.$route2=', this.$route)
      return this.$route.params.itemId
    },
    /**
     * 路由变化导致页面url更改重新渲染其实和增加tab页是脱钩的，可以理解为1.点击侧边栏菜单增加一个tab页，2.监听到路由变化重新
     * 把url渲染让router-view出口展示页面
     * @param targetName
     */
    openTab ({title, path}) {
      // eslint-disable-next-line no-unused-vars
      const {editableTabs: tabs} = this // 获取vue自身this的editableTabs
      console.log('==========', tabs)
      const tab = {
        title,
        name: path || this.$route.path // ||表示或者
      }
      if (this.$store.state.editableTabs.tabs.filter((t) => t.name === tab.name).length === 0) {
        this.$store.commit(TYPES.CHANGE_TABLIST, tab)
      }
      // editableTabsValue为tab的v-mode绑定对象，更改name自动选中对应的的相同的名为name的tab页
      this.editableTabsValue = tab.name
      this.editableTabs = this.$store.state.editableTabs.tabs
    },
    removeTab (targetName) {
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            console.log('nextTab===', nextTab)
            if (nextTab) {
              activeName = nextTab.name
              this.$router.push(nextTab.name)
            }
          }
        })
      }

      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter(tab => tab.name !== targetName)
    },
    handleClick (tab) {
      console.log('==========触发tab页事件========', tab.$options.propsData)
      this.$router.push(tab.$options.propsData.name)
    }
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
