import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { AcademicSemesterController } from './academicSemester.controller'
import { AcademicSemesterValidation } from './academicSemester.validation'

const router = express.Router()

router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemesterValidation.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterController.createAcademicSemester,
)

router.get('/', AcademicSemesterController.getAllAcademicSemester)
router.get('/:semesterId', AcademicSemesterController.getSingleAcademicSemester)
router.patch(
  '/:semesterId',
  validateRequest(
    AcademicSemesterValidation.updateCreateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterController.updateAcademicSemester,
)

export const AcademicSemesterRoute = router
