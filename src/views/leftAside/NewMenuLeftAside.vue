<template>
  <div id="leftAside_container">
    <el-menu class="elMenu_body" style="overflow-y: auto" @open="openHandle">
      <div v-for="subItem in LeftAsideData" :key="subItem.id">
        <!--二级菜单menu  -->
        <el-submenu :index="subItem.id" v-if="subItem.itemFlag === '0'" style="overflow: hidden">
          <template slot="title">
            <span>{{ subItem.name }}</span>
          </template>
          <div v-for="thirdItem in subItem.children" :key="thirdItem.id">
            <!--三级菜单item-->
            <el-menu-item :index="thirdItem.id" v-if="thirdItem.itemFlag === '1'"
                          @click="gotoMenu(thirdItem.id,thirdItem.name)">
              {{ thirdItem.name }}
            </el-menu-item>
            <!--三级菜单menu-->
            <el-submenu :index="thirdItem.id" v-if="thirdItem.itemFlag === '0'" style="overflow: hidden"
                        @click.native="thirdSubmenuHandle">
              <template slot="title">
                <span>{{ thirdItem.name }}</span>
              </template>
              <div v-for="fourthItem in thirdItem.children" :key="fourthItem.id">
                <!--四级菜单menu-->
                <el-submenu :index="fourthItem.id" v-if="fourthItem.itemFlag === '0'"
                            style="overflow: hidden">
                  <template slot="title">
                    <span>{{ fourthItem.name }}</span>
                  </template>
                </el-submenu>
              </div>
            </el-submenu>
          </div>
        </el-submenu>
        <!--二级菜单item-->
        <el-menu-item :index="subItem.id" v-if="subItem.itemFlag === '1'" @click="gotoMain()">
          {{ subItem.name }}
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'NewMenuLeftAside',
  data () {
    return {
      LeftAsideData: ''
    }
  },
  methods: {
    // 全局展开回调函数
    openHandle (index) {
    },
    gotoMain () {
      this.$router.push(`/frameWork/main`)
    },
    gotoMenu (itemId, name) {
      this.$store.state.itemId = itemId
      this.$router.push(`/frameWork/msc/${itemId}`)
    },
    //  三级菜单展开函数
    thirdSubmenuHandle () {
      this.gotoMenu('E001')
    }
  },
  async mounted () {
    await this.$store.dispatch('globalGetMenuData', '')// 调用全局actions中的方法
    this.LeftAsideData = this.$store.state.MENUSTATE.menuHeader.data[0].children
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

body {
  .elMenu_body {
    width: 200px;

    .el-menu-item {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}

</style>
