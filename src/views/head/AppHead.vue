<template>
<!--  使用id，在调试时更加方便去定位页面元素-->
  <div class="appHeadBox" id="appHeader">
    <el-row :gutter="20">
      <el-col :span="12">
        <div style="height: 50px;display: flex;align-items: center;flex-direction: row;flex-wrap: nowrap;justify-content: left">
            <span style="margin-left: 10px;padding-left: 50px">
              <h1>桃花岛</h1>
            </span>
        </div>
      </el-col>
      <el-col :span="12">
        <div style="height: 50px;display: flex;align-items: center;flex-direction: row;flex-wrap: nowrap;justify-content: right">
          <div>
            <img src="../../images/backgroud_image2.jpg"  style="border-radius: 50%;height: 40px;width: 40px;">
          </div>
          <span style="margin-left: 10px;margin-right: 10px">汤姆猫</span>
          <span style="margin-right: 10px">注销</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'AppHead'
}
</script>

<style scoped lang="scss">
*{
  overflow-y: hidden;
}
$appHeadBoxBgColor: darkgray;
.appHeadBox{
  background-color: $appHeadBoxBgColor;
}
</style>
