import User from "../models/user.model.js";
import bcryp from "bcryptjs"; //encriptar la password
import { CreateAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
import { OAuth2Client } from 'google-auth-library';

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
    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      email: userSaved.email,
      username: userSaved.username,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcryp.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" });
    const token = await CreateAccessToken({ id: userFound._id });
    res.cookie("token", token, {
      sameSite: "none", //que no esta en el mismo dominio la cookie
      secure: true,
      httpOnly: false,
    });
    res.json({
      id: userFound._id,
      email: userFound.email,
      username: userFound.username,
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
    res.status(500).json({ message: error.message });
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
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  try {
    if (!token) return res.status(401).json({ message: "unautorized" });

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
      if (err) return res.status(401).json({ message: "unautorized" });
      const userFound = await User.findById(user.id);
      if (!userFound) return res.status(401).json({ message: "unautorized" });
      // console.log(userFound,'ddd');
      return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
      });
    });
  } catch (error) {
    res.status(500).json({message:error.message})
  }
};

