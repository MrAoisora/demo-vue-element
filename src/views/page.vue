<template>
  <div>
    <h1>这是page1</h1>
    <el-button @click="changeState">关闭展开列表</el-button>
  </div>
</template>

<script>
import TYPES from '../store/mutation-types'

export default {
  name: 'page',
  methods: {
    changeState () {
      console.log('进入changeState方法')
      console.log(TYPES.TEST_CHANGEIDNEX)
      console.log(this.$store)
      console.log(this.$store.state.selectedIndex2)
      this.$store.dispatch('addTest', 'abc')
      this.$store.commit(TYPES.TEST_CHANGEIDNEX, 'TEST20001')
    }
  }
}
</script>

<style scoped>

</style>
