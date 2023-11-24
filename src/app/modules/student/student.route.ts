import express from 'express'
import { StudentController } from './student.controller'

const router = express.Router()

//Will call controller function
router.post('/create-student', StudentController.createStudent)
router.get('/', StudentController.getAllStudents)
router.get('/:studentId', StudentController.getSingleStudent)

// eikhane router take object akare pass kora hosse na karon router call kortese
// StudentController k r controller jehetu nijei object tai
export const StudentRoutes = router
