<template>
  <body id="paper">
  <el-form
    :model="loginForm"
    :rules="rules"
    class="login-container"
    label-position="left"
    ref="loginForm"
    label-width="0px"
    v-loading="loading"
  >
    <h3 class="login-title">系统登陆</h3>
    <el-form-item prop="username">
      <el-input
        type="text"
        v-model="loginForm.username"
        placeholder="账号"
      ></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        type="password"
        v-model="loginForm.password"
        placeholder="密码"
      ></el-input>
    </el-form-item>
    <el-checkbox
      class="login_remember"
      v-model="loginForm.checked"
      label-position="left"
    ><span style="color: #505458">记住密码</span></el-checkbox
    >
    <el-form-item style="width: 100%">
      <el-button
        type="primary"
        style="width: 40%; background: #505458; border: none"
        v-on:click="login"
      >登录
      </el-button
      >
      <router-link to="register"
      >
        <el-button
          type="primary"
          style="width: 40%; background: #505458; border: none;position: absolute;right: 0px"
        >注册
        </el-button
        >
      </router-link
      >
    </el-form-item>
  </el-form>
  </body>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: 'root',
        password: '123456',
        checked: false
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6到 15 个字符', trigger: 'blur' }
        ]
      },
      loading: false
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate(bool => {
        if (bool) {
          this.$axios.post('/login', this.loginForm)
            .then(resp => {
              const data = resp.data
              if (data.code === 200) {
                console.log(data)
                this.$message.success(data.message)
                this.$store.commit('login', this.loginForm)
                this.$router.push({ path: '/index' })
              } else {
                this.$message.error(data.message)
              }
            })
            .catch(e => {
            })
        } else {
          this.$message.warning('请正确输入')
        }
      })
    }
  },
  created () {
    // const redirectParam = this.$route.query.redirect || null
    // console.log(redirectParam)
    console.log(this.$store.state)
  }
}
</script>

<style scoped>
#paper {
  background: url("../assets/img/bg/loginbg.jpg") no-repeat center;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: fixed;
}

.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px black;
}

.login-title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

.login_remember {
  margin: 0px 0px 35px 0px;
  text-align: left;
}
</style>
