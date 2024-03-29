import User from "../models/user.model.js";
import bcryp from "bcryptjs"; //encriptar la password
import { CreateAccessToken, TokenForgetPassword } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
// import { TOKEN_SECRET } from "../config.js";
import { OAuth2Client } from "google-auth-library";
import * as dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

export const register = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (userFound) return res.status(400).json(["the email is alredy un"]);
    const passwordHash = await bcryp.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });
    const userSaved = await newUser.save();
    const token = await CreateAccessToken({ id: userSaved._id });

    // console.log(res.cookies);
    res.json({
      id: userSaved._id,
      email: userSaved.email,
      username: userSaved.username,
      movie: userSaved.movie,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(400).json(["User not found"]);
    const isMatch = await bcryp.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json(["Incorrect password"]);
    const token = await CreateAccessToken({ id: userFound._id });

    console.log(userFound, "userr");
    res.json({
      id: userFound._id,
      email: userFound.email,
      username: userFound.username,
      movie: userFound.movie,
      dsds: userFound.dsds,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("token", "", {
      expires: new Date(0),
    });
    return res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const profile = async (req, res) => {
  try {
    const userFound = await User.findById(req.user.id);
    if (!userFound)
      return res.status(400).json({
        message: "User not found",
      });

    return res.json({
      id: userFound._id,
      email: userFound.email,
      username: userFound.username,
      movie: userFound.movie,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const verifyToken = async (req, res) => {
  // console.log(req, 'll');
  const token = req.headers.authorization;
  console.log(token, "kkk");
  try {
    if (!token) return res.status(401).json({ message: "unautorized" });

    jwt.verify(token, process.env.TOKEN_SECRET, async (err, user) => {
      if (err) return res.status(401).json({ message: "unautorized" });
      const userFound = await User.findById(user.id);
      if (!userFound) return res.status(401).json({ message: "unautorized" });
      console.log(userFound, "ddd");
      return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        movie: userFound["movie"],
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const forgetPassword = async (req, res) => {
  console.log("ppp");
  const { email } = req.body; // se debe pasar como un objeto
  console.log(email);
  try {
    const userFound = await User.findOne({ email: email });
    if (!userFound) return res.status(400).json([ "User not found" ]);
    // return res.json({
    //   userFound,
    // });
    // const secret= jwt+userFound.password
    console.log(userFound);
    const token = await TokenForgetPassword({
      email: userFound.email,
      id: userFound._id,
      
    });
    const link = `https://pelis-mike-e6rr.vercel.app/#restPassword/${userFound._id}/${token}`;
    res.json({ link });
  } catch (error) {
    res.json({ message: error });
  }
};

// export const verificateTokenAndId= async (req,res)=>{
//   const 
// }

export const resetPassword = async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;
  console.log('ssss');

  console.log(id);
  const oldUser = await User.findById(id);
  try {
    if (!oldUser) return res.status(400).json({ message: "user not found" });
    if (!token) return res.status(401).json({ message: "unautorized" });

    jwt.verify(token, process.env.TOKEN_SECRET, async (err, user) => {
      if (err) return res.status(401).json({ message: "unautorized" });
      const ecrypPassword = await bcryp.hash(password, 10);
      const userUpdated = await User.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            password: ecrypPassword,
          },
        }
      );
      res.json( ["Password have been changed seccesss"]);
    });

   

  } catch (error) {
   console.log(error);
  }
};
