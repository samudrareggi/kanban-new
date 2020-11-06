<template>
  <li class="card-body">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{task.title}}</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <div class="container hide">
          <div class="d-flex justify-content-end">
            <EditTask
              :idTask="task.id">
            </EditTask>
            <DeleteTask
              :idTask="task.id"
              @deleteTask="deleteTask">
            </DeleteTask>
            <a href="#"><i class="fa fa-arrows"></i></a>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import EditTask from "./EditTask"
import DeleteTask from "./DeleteTask"

export default {
  name: "Task",
  components: {
    EditTask,
    DeleteTask
  },
  props: ["task"],
  methods: {
    deleteTask(payload){
      this.$emit("deleteTask", payload)
    }
  }
}
</script>

<style>

</style>