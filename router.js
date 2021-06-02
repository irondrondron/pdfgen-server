import Router from 'express'
import UserController from './UserController.js'
const router = new Router()

// router.get('/', getAllUsers)


// router.get('/user/:id', getUser)


router.post('/users', UserController.createUser)
router.get('/users', UserController.getAllUsers)
router.get('/users/:id', UserController.getOneUser)
router.delete('/users/:id', UserController.deleteUser)

router.post('/document', UserController.createPdf)



// router.patch('/update/:id', updateUser)


// router.delete('/remove/:id', removeUser)

export default router