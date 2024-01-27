import Genres from "../models/genres.model.js";

// export const getTasks = async (req, res) => {
//     const genres = await Task.find({
//       user:req.user.id // para que me traiga las del usuario que esta logueado y no todas
//     })
//     res.json(tasks);
//   };

export const createGenres = async (req, res) => {
  const { name } = req.body;

  try {
    const newGenre = new Genres({
      name, // antes de utilizar esta funcion pasa por la funcion auth y esa funcion tiene los datos del  usuario en este caso el Id
    });
    const savedGenre = await newGenre.save();
    res.json(savedGenre);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
