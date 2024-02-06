import {Router} from 'express'
import {createOrder} from '../controllers/pay.controllers.js'

const router = Router()

router.post('/create/order', createOrder)
router.get('/success', (req,res)=> res.send('succes'))
router.get('/cancel', (req,res)=> res.send('webhook'))

export default router