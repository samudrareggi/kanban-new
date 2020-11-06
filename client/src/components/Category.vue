<template>
  <div class="col">
    <div class="card mt-4">
      <div class="card-header bg-danger">
        {{ category.name }}
      </div>
      <div class="scrollable">
        <ul>
          <Task
            v-for="task in taskByCategory"
            :key="task.id"
            :task="task"
            @deleteTask="deleteTask">
          </Task>
        </ul>
      </div>
      <AddTask
        :addCategory="this.category"
        @requestAddTask="requestAddTask">
      </AddTask>
    </div>
  </div>
</template>

<script>
import Task from "./Task"
import AddTask from "./AddTask"

export default {
  name: "Category",
  components: {
    Task, AddTask
  },
  props: ["category", "tasks"],
  methods: {
    requestAddTask(payload){
      this.$emit("requestAddTask", payload)
    },
    deleteTask(payload){
      this.$emit("deleteTask", payload)
    }
  },
  computed: {
    taskByCategory(){
      return this.tasks.filter(task => task.category === this.category.name.toLowerCase())
    }
  }
}
</script>

<style>

</style>