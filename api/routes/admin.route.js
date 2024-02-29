import express from 'express'
import { getUsers, verfyUser } from '../controllers/admin.controller.js'
const router = express.Router()

router.get('/userList', getUsers)
router.post('/userList', verfyUser)

export default router