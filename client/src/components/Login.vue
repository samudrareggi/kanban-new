<template>
  <form class="form-signin" @submit.prevent="login">
    <label class="text-dark font-weight-bold" for="login-email">
      Email Address
    </label>
    <input
      v-model="email"
      required
      type="email"
      class="form-styling"
      placeholder="example@email.com">
    <label class="text-dark font-weight-bold" for="login-password">
      Password
    </label>
    <input v-model="password" required type="password" class="form-styling">
    <button type="submit" class="btn btn-success mt-2">Login</button>
    <h6 class="row justify-content-center mt-5">Or login with</h6>
    <div class="g-signin2" data-onsuccess="onSignIn"></div>
  </form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password,
      }
      this.$emit("requestLogin", payload)
    },
  },
}
</script>

<style>
</style>