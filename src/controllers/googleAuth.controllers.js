import User from "../models/user.model.js";
import bcryp from "bcryptjs"; //encriptar la password
import { CreateAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
// import { TOKEN_SECRET } from "../config.js";
import * as dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();
import { OAuth2Client } from "google-auth-library";
import { token } from "morgan";

let tokengogo
export const redirectGoogle = async (req, res) => {
  try {
    // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    // res.setHeader("Access-Control-Allow-Credentials", "true");
    // res.setHeader("Referrer-Policy", "no-referrer-when-downgrade");

    const redirectUrl = "http://localhost:3000/api/auth/google";

    const oAuthClient = new OAuth2Client(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      redirectUrl
    );

    const authorizelUrl = oAuthClient.generateAuthUrl({
      access_type: "offline",
      scope: "https://www.googleapis.com/auth/userinfo.profile  openid",
      prompt: "consent",
    });
    // res.redirect(authorizelUrl);
    res.json({ url: authorizelUrl });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

async function getInformationGoogle(access_token) {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
  );

  //console.log('response',response);
  return await response.json();
  console.log("data: ", data);
}

export const getgoogle = async (req, res) => {
  const code = req.query.code; // es para extraer el código de autorización de la URL de la solicitud que proviene de Google después de que el usuario haya iniciado sesión correctamente. Este código es esencial para obtener el token de acceso de Google y realizar acciones en nombre del usuario en tu servidor.
  console.log(code, "code MMM");

  try {
    const redirectURL = "http://localhost:3000/api/auth/google";
    const oAuth2Client = new OAuth2Client(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      redirectURL
    );
    const tokenResponse = await oAuth2Client.getToken(code);
    // Make sure to set the credentials on the OAuth2 client.
    await oAuth2Client.setCredentials(tokenResponse.tokens);
    console.log("Tokens acquired.");
    const user = oAuth2Client.credentials;
    console.log("credentials:", user, "dds");

    console.log(tokenResponse, "opop");

    // console.log(username,'sss');
    const data = await getInformationGoogle(user.access_token);
    console.log(data, "pppp");
    const googleId = data.sub;
    const username = data.name;

    try {
      const existingUser = await User.findOne({ email: googleId });

      if (existingUser) {
        console.log("Usuario existente:", existingUser);
      } else {
        // Crea un nuevo usuario si no existe
        const newUser = new User({
          id: googleId,
          email: googleId,
          username: username,
          // Otros campos que puedas necesitar
        });
        await newUser.save();
        console.log("Nuevo usuario creado:", newUser);
      }
    } catch (error) {
      console.error("Error al buscar/crear usuario:", error);
    }
    // const userSaved = await newUser.save();
    // const token = await CreateAccessToken({ id: googleId });
    const token = user.id_token;

    // window.localStorage.setItem('googleToken',token)
    res.redirect(303, "http://localhost:5173/start");

    tokengogo = {
      id: data.sub,
      // email: userSaved.email,
      username: data.name,
      googleToken: token,
    };

   
    // localStorage.setItem('googleToken', user.id_token);

    // Redirigir al usuario de vuelta
  } catch (err) {
    console.log("Error logging in with OAuth2 user", err);
  }

  res.redirect(303, "http://localhost:5173/start");

};

export const tokenLocal = async (req, res) => {
    res.json(tokengogo)
    
}



export const verifyGoogleToken = async (req, res) => {
  console.log("sss");
  const { googleToken } = req.cookies; // Suponiendo que el token de Google se envía en el cuerpo de la solicitud

  try {
    // Verifica el token de Google con el cliente OAuth2 de Google
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    const ticket = await client.verifyIdToken({
      idToken: googleToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const userId = payload["sub"]; // ID único del usuario en Google

    // Aquí puedes realizar acciones adicionales, como buscar o crear un usuario en tu base de datos usando el ID de usuario de Google

    const userMongo = await User.findOne({ email: payload["sub"] });
    console.log(userMongo, "sss");

    // Devuelve la información del usuario como respuesta
    return res.json({
      id: userMongo._id,
      username: userMongo.username,
      email: userMongo.email,
      // name: userMongo.username,
      // Otros datos que quieras devolver
    });
  } catch (error) {
    console.error("Error verifying Google token:", error);
    res.status(401).json({ message: "Unauthorized" });
  }
};
