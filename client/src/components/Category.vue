<template>
  <div class="col">
    <div class="card mt-4">
      <div class="card-header bg-danger">
        {{ category.name }}
      </div>
      <div class="scrollable">
        <ul>
          <draggable :list="taskByCategory" group="task" :move="onMove" :category="category" @end="updateCategory">
            <Task
              v-for="task in taskByCategory"
              :key="task.id"
              :task="task"
              :id="task.id"
              @deleteTask="deleteTask"
              @requestEditTask="requestEditTask">
            </Task>
          </draggable>
        </ul>
      </div>
      <AddTask
        :addCategory="category"
        @requestAddTask="requestAddTask">
      </AddTask>
    </div>
  </div>
</template>

<script>
import Task from "./Task"
import AddTask from "./AddTask"
import draggable from "vuedraggable"

export default {
  name: "Category",
  data(){
    return {
      currentId: null,
      updatedCategory: null,
    }
  },
  components: {
    Task, AddTask, draggable
  },
  props: ["category", "tasks"],
  methods: {
    requestAddTask(payload){
      this.$emit("requestAddTask", payload)
    },
    deleteTask(payload){
      this.$emit("deleteTask", payload)
    },
    onMove(event){
      this.currentId = event.draggedContext.element.id
      this.updatedCategory = event.relatedContext.component.$attrs.category.name
    },
    updateCategory(){
      const payload = {
        id: this.currentId,
        category: this.updatedCategory.toLowerCase()
      }
      this.$emit("updateCategory", payload)
    },
    requestEditTask(payload){
      this.$emit("requestEditTask", payload)
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