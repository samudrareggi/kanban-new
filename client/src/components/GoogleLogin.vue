<template>
  <div class="row justify-content-center">
      <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin>
  </div>
</template>

<script>
import GoogleLogin from 'vue-google-login'

export default {
  name: "Google",
  data() {
    return {
      params: {
        client_id: "646679172615-5d22ugthjbnhr9b039k8e6n0gqgkr5j5.apps.googleusercontent.com"
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      }
    }
  },
  components: {
    GoogleLogin
  },
  methods: {
    onSuccess(googleUser) {
      const payload = {
        name: googleUser.getBasicProfile().Ad,
        email: googleUser.getBasicProfile().$t,
        id_token: googleUser.wc.id_token
      }
      this.$emit("googleLogin", payload)
    }
  }
}
</script>

<style>

</style>