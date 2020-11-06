<template>
  <div>
    <LandingPage
      v-if="pageName === 'landingPage'"
      @postLogin="postLogin"
      @postRegister="postRegister">
    </LandingPage>
    <HomePage
      v-else-if="pageName === 'homePage'"
      @requestLogout="logout"
      :name="name"
      :categories="categories"
      :tasks="tasks"
      @postAddTask="postAddTask"
      @deleteTask="deleteTask"
      @updateCategory="updateCategory">
    </HomePage>
  </div>
</template>

<script>
import LandingPage from "./components/LandingPage"
import HomePage from "./components/HomePage"
import axios from "./config/axios"

export default {
  name: "App",
  components: {
    LandingPage,
    HomePage
  },
  data() {
    return {
      pageName: "landingPage",
      name: "",
      categories: [
        {
          name: "Backlog"
        },
        {
          name: "Todo"
        },
        {
          name: "Doing"
        },
        {
          name: "Done"
        },
      ],
      tasks: []
    }
  },
  methods: {
    changePage(name){
      this.pageName = name
    },
    isLogin(){
      if (localStorage.getItem("token")) {
        this.changePage("homePage")
        this.name = localStorage.getItem("name")
        this.fetchTasks()
      } else {
        this.changePage("landingPage")
      }
    },
    postRegister(payload) {
      axios({
        url: "register",
        method: "POST",
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password,
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch((err) => {
          console.log(err.response.data.error)
        })
    },
    postLogin(payload) {
      axios({
        url: "/login",
        method: "POST",
        data: {
          email: payload.email,
          password: payload.password,
        }
      })
        .then(({data}) => {
          const token = data.access_token
          localStorage.setItem("token", token)
          localStorage.setItem("name", data.name)
          this.name = data.name
          this.changePage("homePage")
          this.fetchTasks()
        })
        .catch(err => {
          console.log(err.response.data.error)
        })
    },
    logout(){
      localStorage.clear()
      this.isLogin()
    },
    fetchTasks(){
      const token = localStorage.getItem("token")
      axios({
        url: "/tasks",
        method: "GET",
        headers: {
          token
        }
      })
        .then(({data}) => {
          this.tasks = data
        })
        .catch(err => {
          console.log(err.response.data.error)
        })
    },
    postAddTask(payload){
      const token = localStorage.getItem("token")
      axios({
        url: "/tasks",
        method: "POST",
        headers: {
          token
        },
        data: {
          title: payload.title,
          category: payload.category,
        }
      })
        .then(({data}) => {
          this.fetchTasks()
        })
        .catch (err => {
          console.log(err.response.data.error)
        })
    },
    deleteTask(payload){
      const token = localStorage.getItem("token")
      axios({
        url: `/tasks/${payload}`,
        method: "DELETE",
        headers: {
          token
        },
      })
        .then(({data}) => {
          this.fetchTasks()
        })
        .catch (err => {
          console.log(err.response.data.error)
        })
    },
    updateCategory(payload){
      const token = localStorage.getItem("token")
      axios({
        url: `/tasks/${payload.id}`,
        method: "PATCH",
        headers: {
          token
        },
        data: {
          category: payload.category
        }
      })
        .then(({data}) => {
          this.fetchTasks()
        })
        .catch(err => {
          console.log(err.response.data.error)
        })
    }
  },
  created() {
    this.isLogin()
  }
}
</script>

<style>
</style>