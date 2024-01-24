import Task from "../models/taks.model.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find({
    user:req.user.id // para que me traiga las del usuario que esta logueado y no todas
  }).populate('user');
  res.json(tasks);
};
export const createTaks = async (req, res) => {
  const { title, img, date } = req.body;
  const newTask = new Task({
    title,
    img,
    date,
    user:req.user.id // antes de utilizar esta funcion pasa por la funcion auth y esa funcion tiene los datos del  usuario en este caso el Id
  });
  const savedTask = await newTask.save();
  res.json(savedTask);
};
export const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "task not found" });
  res.json(task);
};

export const deleteTasks = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ message: "task not found" });
  return res.sendStatus(204)
};
export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }); //new:true para que me devuelva el dato nuevo apenas se actualice
  if (!task) return res.status(404).json({ message: "task not found" });
  res.json(task);
};
