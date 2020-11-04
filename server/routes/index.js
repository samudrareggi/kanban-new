const express = require("express")
const router = express.Router()
const tasksRouter = require("./tasks")
const userRouter = require("./users")

router.use("/", userRouter)
router.use("/tasks", tasksRouter)

module.exports = router
