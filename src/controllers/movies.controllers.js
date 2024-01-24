import Movies from "../models/movies.model.js";

export const getMovies = async (req, res) => {
  const movies = await Movies.find({}).populate("genres");
  res.json(movies);
};

export const createMovies = async (req, res) => {
  const { title, img, type, date, genres, video } = req.body;
  console.log(req.body[title]);
  let isArray = Array.isArray(req.body);
  if (isArray === true) {
    const savedMovie = [];
    for (let i = 0; i < req.body.length; i++) {
      const newMovie = new Movies({
        title: req.body[i].title,
        img: req.body[i].img,
        type: req.body[i].type,
        date,
        genres: req.body[i].genres,
        video: req.body[i].video,
      });
      const saveMovie = await newMovie.save();
      savedMovie.push(saveMovie);
    }
    res.json(savedMovie);
  } else {
    const newMovie = new Movies({
      title,
      img,
      type,
      date,
      genres,
      video,
    });

    console.log(newMovie)
    const saveMovie = await newMovie.save();
    res.json(saveMovie);
  }
};
