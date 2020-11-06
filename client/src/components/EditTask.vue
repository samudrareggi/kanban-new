<template>
  <div>
  <!-- Button trigger modal -->
    <div class="text-center">
      <a data-toggle="modal" :data-target="this.taskId" href=""><i class="fa fa-edit"></i></a>
    </div>

    <!-- Modal -->
    <div class="modal fade" :id="this.taskModal" tabindex="-1" :aria-labelledby="this.idTask" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editModalTitle">Edit Task</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="requestEditTask">
              <div class="form-group">
                <label for="title-name" class="col-form-label">Title:</label>
                <input type="text" class="form-control" v-model="title">
              </div>
              <div class="form-group">
                <label for="description-text" class="col-form-label">Description:</label>
                <textarea class="form-control" v-model="description"></textarea>
              </div>
              <div class="modal-footer mt-5">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditTask",
  props: ["idTask"],
  data(){
    return {
      title: "",
      description: "",
      taskId: `#addTaskModal${this.idTask}`,
      taskModal: `addTaskModal${this.idTask}`,
    }
  },
  methods: {
    requestEditTask(){
      const payload = {
        title: this.title,
        description: this.description,
      }
      this.$emit("requestEditTask", payload)
      console.log(this.addCategory)
    }
  }
}
</script>

<style>

</style>