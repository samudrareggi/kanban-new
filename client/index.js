let app = new Vue({
  el: "#app",
  data: {
    pageName: "landing-page",
    user: {
      name: "",
      password: ""
    }
  },
  methods: {
    changePage(name) {
      this.pageName = name
    },
    login() {
      this.changePage("home-page")
    }
  }
})


// Function for transisi nav landing page

$(".butn").click(function () {
  $(".form-signin").toggleClass("form-signin-left");
  $(".form-signup").toggleClass("form-signup-left");
  $(".signin-active").toggleClass("signin-inactive");
  $(".signin-inactive").toggleClass("signin-active");
});
