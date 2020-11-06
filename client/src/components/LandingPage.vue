<template>
  <div class="containerLanding">
    <div class="row">
      <div class="col-6">
        <div class="frame mt-5">
          <!-- Navigasi -->
          <div class="nav">
            <ul class="links">
              <li class="signin-active font-weight-bold">
                <a class="butn">Login</a>
              </li>
              <li class="signup-inactive font-weight-bold">
                <a class="butn">Register</a>
              </li>
            </ul>
          </div>
          <!-- Login -->
          <Login @requestLogin="postLogin"></Login>
          <!-- Register -->
          <Register @requestRegister="postRegister"></Register>
        </div>
      </div>
      <div class="col-6">
        <img class="kanbanImg" src="https://i.imgur.com/XLRW8O9.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Login from "./Login"
import Register from "./Register"

export default {
  name: "LandingPage",
  components: {
    Login,
    Register
  },
  methods: {
    postLogin(payload) {
      this.$emit("postLogin", payload)
    },
    postRegister(payload) {
      this.$emit("postRegister", payload)
    },
  },
}
</script>

<style>
</style>