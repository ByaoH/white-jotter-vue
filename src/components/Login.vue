<template>
  <div>
      用户名:<input type="text" v-model="loginForm.username" placeholder="请输入用户名"/>
      <br>
      密码:<input type="password" v-model="loginForm.password" placeholder="请输入密码"/>
      <br>
      <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      responseResult: []
    }
  },
  methods: {
    login () {
      this.$axios.post('/login', this.loginForm)
        .then(resp => {
          if (resp.data.code === 200) {
            console.log(resp.data)
            this.$router.replace({ path: '/index' })
            this.$message.success(resp.data.message)
          } else {
            this.$message.error(resp.data.message)
          }
        })
        .catch(e => {
        })
    }
  }
}
</script>

<style scoped>

</style>
