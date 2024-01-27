import {Router} from 'express'
import { createMovies, getMovies,getTypeMovies } from '../controllers/movies.controllers.js'
const router= Router()

router.post('/movies', createMovies)
router.get('/movies', getMovies )
router.get('/moviestType/:id', getTypeMovies )
export default router