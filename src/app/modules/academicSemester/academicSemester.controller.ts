import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { TAcademicSemesterNameCoderMapper } from './academicSemester.interface'
import { AcademicSemesterServices } from './academicSemester.service'

const createAcademicSemester = catchAsync(async (req, res) => {
  const body = req.body

  const result =
    await AcademicSemesterServices.createAcademicSemesterIntoDB(body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester is created successfully',
    data: result,
  })
})

const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params
  const result =
    await AcademicSemesterServices.getSingleAcademicSemesterFormDB(semesterId)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester is created successfully',
    data: result,
  })
})
const updateAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params
  const result = await AcademicSemesterServices.updateAcademicSemesterFormDB(
    semesterId,
    req.body,
  )
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester is created successfully',
    data: result,
  })
})
const getAllAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllAcademicSemesterFormDB()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester is created successfully',
    data: result,
  })
})

export const AcademicSemesterController = {
  createAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
  getAllAcademicSemester,
}
