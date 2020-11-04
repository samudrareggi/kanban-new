const { Task } = require("../models")

class TaskController {
  static getTask(req, res, next) {
    Task.findAll({
      order: [["id", "ASC"]]
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next()
      })
  }
  static postTask(req, res, next) {
    const data = {
      title: req.body.title,
      category: req.body.category,
      userId: req.loggedInUser.id
    }
    Task.create(data)
      .then(data => {
        const title = data.title
        const category = data.category
        res.status(201).json({ title, category })
      })
      .catch(err => {
        next(err)
      })
  }
  static putTaskById(req, res, next) {
    const { title } = req.body

    Task.update({ title }, { where: { id: req.params.id }, returning: true })
      .then(data => {
        res.status(200).json(data[1][0])
      })
      .catch(err => {
        next(err)
      })
  }
  static patchTaskById(req, res, next) {
    const { category } = req.body

    Task.update({ category }, { where: { id: req.params.id }, returning: true })
      .then(data => {
        res.status(200).json(data[1][0])
      })
      .catch(err => {
        next(err)
      })
  }
  static deleteTaskById(req, res, next) {
    Task.destroy({ where: { id: req.params.id } })
      .then(data => {
        res.status(201).json({ message: "Task success to delete" })
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = TaskController