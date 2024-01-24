import {Router} from 'express'
import { createMovies, getMovies } from '../controllers/movies.controllers.js'
const router= Router()

router.post('/movies', createMovies)
router.get('/movies', getMovies )
export default router