let app = new Vue({
  el: "#app",
  data: {
    SERVER: "http://localhost:3000",
    pageName: "landing-page",
    user: {
      name: "",
      email: "",
      password: ""
    },
    tasks: []
  },
  methods: {
    changePage(name) {
      this.pageName = name
    },
    login() {
      const email = this.user.email
      const password = this.user.password

      axios({
        url: this.SERVER + "/login",
        method: "POST",
        data: {
          email, password
        }
      })
        .then(response => {
          const token = response.data.access_token
          const name = response.data.name
          localStorage.setItem("token", token)
          localStorage.setItem("name", name)
          this.user.name = name
          this.changePage("home-page")
          this.fetchTasks()
        })
        .catch(err => {
          console.log(err)
        })
    },
    register() {
      const name = this.user.name
      const email = this.user.email
      const password = this.user.password

      axios({
        url: this.SERVER + "/register",
        method: "POST",
        data: {
          name, email, password
        }
      })
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
    },
    logout() {
      localStorage.clear()
      this.isLogin()
    },
    isLogin() {
      if (localStorage.getItem("token")) {
        this.changePage("home-page")
        this.user.name = localStorage.getItem("name")
        this.fetchTasks()
      } else {
        this.changePage("landing-page")
      }
    },
    fetchTasks() {
      const token = localStorage.getItem("token")
      axios({
        url: this.SERVER + "/tasks",
        methods: "GET",
        headers: { token }
      })
        .then(response => {
          this.tasks = response.data
        })
        .catch(err => {

        })
    }
  },
  created() {
    this.isLogin()
  }
})


// Function for transisi nav landing page

$(".butn").click(function () {
  $(".form-signin").toggleClass("form-signin-left");
  $(".form-signup").toggleClass("form-signup-left");
  $(".signin-active").toggleClass("signin-inactive");
  $(".signin-inactive").toggleClass("signin-active");
});
