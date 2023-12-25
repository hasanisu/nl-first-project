import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { StudentController } from './student.controller'
import { updateStudentValidationSchema } from './student.validation'

const router = express.Router()

//Will call controller function
router.get('/', StudentController.getAllStudents)
router.get('/:studentId', StudentController.getSingleStudent)
router.patch(
  '/:studentId',
  validateRequest(updateStudentValidationSchema),
  StudentController.updateStudent,
)
router.delete('/:studentId', StudentController.deleteStudent)

// eikhane router take object akare pass kora hosse na karon router call kortese
// StudentController k r controller jehetu nijei object tai
export const StudentRoutes = router
