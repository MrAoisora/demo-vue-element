<template>
  <div id="main_contianer">
    <!--  注意templa里面只能放一个div,该div里面有几个div都是随意的-->
    <el-button @click="testSelect()">测试点击按钮后选中某个菜单</el-button>
    <div id="cardBox" style="padding: 20px 10px">
      <el-row :gutter="12">
        <el-col :span="8" v-for="item in this.list" :key="item.id">
          <div draggable="true" @dragstart="handleDragStart(item)"
               @dragover.prevent="handleDragEnter($event,item)" @dragend="handleDragEnd()">
            <el-card shadow="never" class="cardStyle">
              <!--     盒子高度130，上下padding是20px,画一个90px内盒子即可居中      -->
              <div style="height: 90px">
                <div
                  style="display: flex;flex-direction: row;flex-wrap: nowrap;align-items: center;justify-content: left">
                  <span style="font-size: 15px">累积用户</span>
                </div>
                <div
                  style="display: flex;flex-direction: row;flex-wrap: nowrap;align-items: center;justify-content: left">
                  <span style="font-size: 25px;margin-top: 15px">0</span>
                </div>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
    <div id="chartBox">
      <h1>这是图表Box</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewAppMain',
  mounted () {
    console.log('================进入main页面==========================', this.$route)
  },
  methods: {
    handleDragStart (item) {
      console.log('开始拖动.....', item)
    },
    handleDragEnter (e, item) {
      e.dataTransfer.effectAllowed = 'move'
      console.log('’‘’‘’‘’‘’‘’', item)
    },
    handleDragEnd () {
      console.log('你倒是动啊!!!!!')
    }
  },
  data () {
    return {
      list: [
        {'id': 1},
        {'id': 2}
      ]
    }
  }
}
</script>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.cardStyle {
  height: 130px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: left;
}

</style>
