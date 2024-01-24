import {Router} from 'express'
import {authRequired} from '../middlewares/validateToken.js'
import {getTask,getTasks,deleteTasks,updateTask,createTaks} from '../controllers/taks.controllers.js'
const router = Router()

router.get('/tasks',authRequired,getTasks )
router.get('/task/:id',authRequired,getTask)
router.post('/task',authRequired,createTaks)
router.delete('/task/:id',authRequired,deleteTasks)
router.put('/task/:id',authRequired,updateTask)
export default router 