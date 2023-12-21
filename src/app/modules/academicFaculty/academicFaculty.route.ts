import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { AcademicFacultyControllers } from './academicFaculty.controller'
import { AcademicFacultyValidation } from './academicFaculty.validation'

const router = express.Router()

router.post(
  '/create-academic-faculty',
  validateRequest(
    AcademicFacultyValidation.createAcademicFacultyValicationSchema,
  ),
  AcademicFacultyControllers.createAcademicFaculty,
)

router.get('/', AcademicFacultyControllers.getAllAcademicFaculty)
router.get('/:facultyId', AcademicFacultyControllers.getSingleAcademicFaculty)
router.patch(
  '/:facultyId',
  validateRequest(
    AcademicFacultyValidation.updateAcademicFacultyValicationSchema,
  ),
  AcademicFacultyControllers.updateAcademicFaculty,
)

export const AcademicFacultyRoute = router
