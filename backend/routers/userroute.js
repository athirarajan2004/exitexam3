const express = require('express')
const app = express()
const router = express.Router()
const {getUsers,addUser,updateUser} = require('../controllers/userControllers')
router.get('/',getUsers);
router.post('/signup',addUser)
router.patch('/update',updateUser)


module.exports = router;