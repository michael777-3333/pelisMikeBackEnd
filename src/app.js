import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/task.routes.js' 
import moviesRoutes from './routes/movies.routes.js'
import genresRoutes from './routes/genres.routes.js'
import user from './routes/user.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app= express()
 app.use(cors({
    origin:'http://localhost:5173',
    credentials:true, // para que tenga las credentiales de cookies en los dos dominios 

 }
    
 ));// esto ayuda porque al tener dos dominios en el backend y frondend no me bote el error de politicas 
app.use(morgan('dev')) //muestra la peticion
app.use(express.json()) //para que express entienda archivos Json
app.use(cookieParser()) //para poder obtener las cookies en el middleward

app.use("/api",authRoutes) //las rutas de autenticacion
app.use('/api',taskRoutes) // rutas de borrar favoritos 
app.use('/api',moviesRoutes)
app.use('/api',genresRoutes)
app.use('/api',user)

export default app