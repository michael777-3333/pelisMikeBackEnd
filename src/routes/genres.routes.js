import {Router} from 'express'
import { createGenres } from '../controllers/genre.controllers.js'
const router= Router()

router.post('/genres',createGenres)
export default router