<template>
  <div class="loginDiv">
    <el-form ref="form" :rules="rules" :model="loginForm" class="loginContainer">
      <h1 class="loginTitle">系统登录</h1>
      <el-form-item prop="username">
        <i class="iconfont">&#xe623;</i>
        <el-input type="text" auto-complete="false" v-model="loginForm.username" placeholder="请输入用户名"
                  style="width: 250px"/>
      </el-form-item>
      <el-form-item prop="password">
        <i class="iconfont">&#xe623;</i>
        <el-input type="password" auto-complete="false" v-model="loginForm.password" placeholder="请输入密码"
                  style="width: 250px"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input type="text" auto-complete="false" v-model="loginForm.code" placeholder="点击图片更换验证码"
                  style="width: 140px;padding-right: 94px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked" style="margin-right: 170px;">记住我</el-checkbox>
      </el-form-item>
      <el-button type="primary" style="width: 170px" @click="submitLogin">登录</el-button>

    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
import TYPES from '../store/mutation-types'
export default {
  name: 'Login',
  data () {
    return {
      imgSrcUrl: '',
      loginForm: {
        username: '',
        password: '',
        code: ''
      },
      rules: {
        username: [{required: true, message: '请输入用户名称', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}],
        code: [{required: true, message: '请输入验证码', trigger: 'blur'}]
      }
    }
  },
  methods: {
    submitLogin: function () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert('submit!')
          // eslint-disable-next-line no-unused-vars
          const url = 'http://127.0.0.1:8099/menucreate/queryAllMenu'
          // eslint-disable-next-line no-unused-vars
          const params = ''
          axios.post(url, params).then(response => {
            // 获取服务器返回的数据
            const menuDate = response.data
            console.log('拿到的数据为:', response.data)
            this.$store.commit(TYPES.SAVE_MENUDATA, menuDate)
            this.$router.replace('/frameWork')
          }).error(error => {
            alert(error)
            console.log(error)
          }).catch()
        } else {
          this.$message.error('请输入所有字段')
          return false
        }
      })
    }
  }
}
</script>

<style>

.loginDiv {
  background-image: url("../images/backgroud_image2.jpg");
  margin: 0px auto;
  height: 1025px;
  padding-top: 150px;
}

.loginContainer {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 0px auto;
  width: 350px;
  height: 400px;
  padding: 15px 35px 15px 35px;
  background: #00000068;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.loginTitle {
  padding-top: 30px;
  color: #ffffff;
  margin: 0px auto 40px auto;
  text-align: center;
}

.el-input__inner {
  background: none;
  border: none;
  border-bottom: #FFFFFF 2px solid;
  color: #ffffff;
}

.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #ffffff
}

.el-checkbox__input.is-focus .el-checkbox__inner {
  border-color: #ffffff
}
</style>
