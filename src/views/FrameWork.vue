<!--该组件为主要页面布局页面-->
<template>
  <!--  加上外层class名，限定当前的修改样式只能在该class以及其子元素中生效，也可以使用id-->
  <div class="frameWorkBox">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246);height: auto">
        <appleftAside></appleftAside><!--引入自定义组件 -->
      </el-aside>
      <el-container>
        <el-header class="headerBox">
          <appHead :class="{appHeaderBox:this.showFlag === 1}" style="text-align: right; font-size: 12px"></appHead>
          <!--引入自定义组件,根据条件来选择class进行页面渲染，语法:class{类名:条件 类名:条件....} -->
        </el-header>
        <el-main>
          <!--        <app-main></app-main> &lt;!&ndash;引入自定义组件 &ndash;&gt;-->
          <keep-alive>
            <!--            当keepAlive为true时渲染keep-alive中的组件-->
            <router-view :key="checkKeepAlive()" v-if="$route.meta.keepAlive"/>
<!--            <router-view key="aaaa" v-if="$route.meta.keepAlive"/>-->
          </keep-alive>
          <!--            当keepAlive为false时渲染keep-alive外的组件-->
          <router-view :key="checkKeepAlive()" v-if="!$route.meta.keepAlive"/>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 导入自定义的vue组件
import appleftAside from './leftAside/MenuLeftAside'
// import appleftAside from './leftAside/LeftAside'
import appHead from './head/AppHead'
import appMain from './main/AppMain'

export default {
  name: 'FrameWork',
  components: {
    appleftAside,
    appHead,
    appMain
  },
  data () {
    return {
      showFlag: 2
    }
  },
  methods: {
    checkKeepAlive () {
      if (this.$route.meta.keepAlive) {
        console.log('输出', this.$route.name)
        return this.$route.name + Math.random()
      }
    }
  },
  watch: {
    $route (newValue, oldValue) {
      console.log('新', newValue)
      console.log('旧', oldValue)
    }
  },
  mounted () {
    /**
     * 添加了该方法会弹出离开页面的确认框
     * @param e
     */
    window.onbeforeunload = e => {
      this.checkKeepAlive()
      e = e || window.event
      // 兼容IE8和Firefox 4之前的版本
      if (e) {
        e.returnValue = '关闭提示'
      }
      console.log('关闭提示')
      console.log('关闭提示')
      console.log('关闭提示')
      console.log('关闭提示')
      console.log('关闭提示')
      console.log('关闭提示')
      console.log('关闭提示')
    }
  }
}
</script>

<!--lang = "scss"需要安装依赖-->
<style scoped lang="scss">

/*通配符选择器，该页面下的所有marginhe padding都设置为0*/
* {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

/*普通css的类选择器*/
/*.frameWorkBox .asideBox{
  background-color: #5daf34;
  width: 200px;
}*/

/*scss允许嵌套的类选择器*/
.frameWorkBox {
  /*所有的子类元素会继承该父类元素的背景样式*/
  .containerBox {
    background-color: blue;
  }

  .headerBox {
    /* background-color: darkgray;*/
    .appHeaderBox {
      display: none;
    }
  }

  /*scss允许使用变量定义样式*/
  $backgroundColor: #ffff00;

  .asideBox {
    background-color: $backgroundColor;
    width: 300px;
  }
}
</style>
