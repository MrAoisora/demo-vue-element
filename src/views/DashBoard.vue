<template>
<!--  注意templa里面只能放一个div,该div里面有几个div都是随意的-->
  <div id="mainContainer">
    <el-button @click="testSelect()">测试点击按钮后选中某个菜单</el-button>
    <div id="cardBox" style="padding: 20px 10px">
      <el-row :gutter="12">
        <el-col :span="8">
          <el-card shadow="never" class="cardStyle">
            <!--     盒子高度130，上下padding是20px,画一个90px内盒子即可居中      -->
            <div style="height: 90px" >
              <div style="display: flex;flex-direction: row;flex-wrap: nowrap;align-items: center;justify-content: left">
                <span style="font-size: 15px">累积用户</span>
              </div>
              <div style="display: flex;flex-direction: row;flex-wrap: nowrap;align-items: center;justify-content: left">
                <span style="font-size: 25px;margin-top: 15px">0</span>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never" class="cardStyle">
            <!--     盒子高度130，上下padding是20px,画一个90px内盒子即可居中      -->
            <div style="height: 90px" >
              <div style="display: flex;flex-direction: row;flex-wrap: nowrap;align-items: center;justify-content: left">
                <span style="font-size: 15px">累积用户</span>
              </div>
              <div style="display: flex;flex-direction: row;flex-wrap: nowrap;align-items: center;justify-content: left">
                <span style="font-size: 25px;margin-top: 15px">0</span>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never" class="cardStyle">
            <!--     盒子高度130，上下padding是20px,画一个90px内盒子即可居中      -->
            <div style="height: 90px" >
              <div style="display: flex;flex-direction: row;flex-wrap: nowrap;align-items: center;justify-content: left">
                <span style="font-size: 15px">累积用户</span>
              </div>
              <div style="display: flex;flex-direction: row;flex-wrap: nowrap;align-items: center;justify-content: left">
                <span style="font-size: 25px;margin-top: 15px">0</span>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never" class="cardStyle">
            <!--     盒子高度130，上下padding是20px,画一个90px内盒子即可居中      -->
            <div style="height: 90px" >
              <div style="display: flex;flex-direction: row;flex-wrap: nowrap;align-items: center;justify-content: left">
                <span style="font-size: 15px">累积用户</span>
              </div>
              <div style="display: flex;flex-direction: row;flex-wrap: nowrap;align-items: center;justify-content: left">
                <span style="font-size: 25px;margin-top: 15px">0</span>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never" class="cardStyle">
            <!--     盒子高度130，上下padding是20px,画一个90px内盒子即可居中      -->
            <div style="height: 90px" >
              <div style="display: flex;flex-direction: row;flex-wrap: nowrap;align-items: center;justify-content: left">
                <span style="font-size: 15px">累积用户</span>
              </div>
              <div style="display: flex;flex-direction: row;flex-wrap: nowrap;align-items: center;justify-content: left">
                <span style="font-size: 25px;margin-top: 15px">0</span>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never" class="cardStyle">
            <!--     盒子高度130，上下padding是20px,画一个90px内盒子即可居中      -->
            <div style="height: 90px" >
              <div style="display: flex;flex-direction: row;flex-wrap: nowrap;align-items: center;justify-content: left">
                <span style="font-size: 15px">累积用户</span>
              </div>
              <div style="display: flex;flex-direction: row;flex-wrap: nowrap;align-items: center;justify-content: left">
                <span style="font-size: 25px;margin-top: 15px">0</span>
              </div>
            </div>
          </el-card>
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
  name: 'DashBoard',
  methods: {
    testSelect () {
      console.log('测试vue的本地存储')
    }
  }
}
</script>

<style scoped>
  .cardStyle{
    height: 130px;
    margin-bottom: 20px;
    flex-direction: row;
    justify-content: left;
  }
  .el-card__body{
    padding: 0px;
  }
</style>
