<template>
  <div class="container-app">
      <!-- Navbar -->
      <div class="d-flex justify-content-between navhome">
        <a class="navbar-brand" href="#">
          <img
            src="https://icons-for-free.com/iconfiles/png/512/cards+kanban+management+project+tasks+trello+icon-1320165725577116630.png"
            width="50" height="50" class="d-inline-block" alt="" loading="lazy">
          KANBAN
        </a>
        <div class="btn-group dropleft">
          <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            {{name}}
          </button>
          <div class="dropdown-menu">
            <a @click.prevent="logout" class="dropdown-item" href="">Logout</a>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="d-flex justify-content-around containerItem">
        <Category
          v-for="(cat,i) in categories"
          :key="i"
          :category="cat"
          :tasks="tasks"
          @requestAddTask="postAddTask"
          @requestEditTask="postEditTask"
          @deleteTask="deleteTask"
          @updateCategory="updateCategory">
        </Category>
      </div>
  </div>
</template>

<script>
import Category from "./Category"

export default {
  name: "HomePage",
  components: {
    Category
  },
  props: ["name", "categories", "tasks"],
  methods: {
    logout() {
      this.$emit("requestLogout")
    },
    postAddTask(payload) {
      this.$emit("postAddTask", payload)
    },
    postEditTask(payload) {
      this.$emit("postEditTask", payload)
    },
    deleteTask(payload){
      this.$emit("deleteTask", payload)
    },
    updateCategory(payload){
      this.$emit("updateCategory", payload)
    }
  }
}
</script>

<style>

</style>