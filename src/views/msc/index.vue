<template>
  <el-card>
    <iframe v-if="!notFound"
            width="100%"
            :height="getIframeHeight()"
            :id="getId()"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            scrolling="auto"
            vspace="0"
            :src="url">
    </iframe>
    <div v-else
         class="failed-wrapper"
         :style="{height:getIframeHeight()+'px'}">
      <div class="failed-tips-wrapper">
        <div class="failed-msg">
          404
          <br/>
          <span>页面不存在</span>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>

import {getMenuUrl} from '../../utils/menuCommon'

export default {
  name: 'index',
  data () {
    return {
      loading: false,
      notFound: true,
      url: ''
    }
  },
  activated () {
    console.log('更改后的keep-alived', this.$route.meta)
  },
  mounted () {
    console.log('router', this.$route)
    if (this.$store.state.MENUSTATE.menuHeader.data[0].children) {
      this.updateUrl()
    }
  },
  methods: {
    updateUrl () {
      try {
        this.loading = true
        // eslint-disable-next-line no-unused-vars
        const url = getMenuUrl(this.$store.state.itemId, this.$store.state.MENUSTATE.menuHeader.data[0].children)
        console.log('url=', url)
        if (url) {
          this.notFound = false
          this.url = url
        } else {
          this.notFound = true
        }
      } finally {
        this.loading = false
      }
    },
    getIframeHeight () {
      // if (this.size.mainContentHeight > 0) {
      //   // eslint-disable-next-line no-unused-vars
      //   const cardPadding = 20
      //   // eslint-disable-next-line no-unused-vars
      //   const tabTitleHeader = 56
      //   return this.size.mainContentHeigtht - tabTitleHeader - cardPadding * 2 - this.size.headerHeight - this.size.footerHeight
      // }
      return 500
    },
    getId () {
      return 'mainContent'
    }
  },
  /**
   * 添加监听器,监听store的变化
   */
  watch: {
    // '$store.state.menuData' () {
    //   if (this.$route.path !== '/frameWork') {
    //     this.$router.push('/frameWork')
    //     this.$destroy()
    //   }
    // }
  }
}
</script>

<style scoped lang="scss">
.failed-wrapper {
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  margin-top: 0 !important;
}
</style>
