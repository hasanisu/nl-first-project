import { NextFunction, RequestHandler, Response, Request } from 'express'
import httpStatus from 'http-status'
import sendResponse from '../../utils/sendResponse'
import { StudentServices } from './student.service'
import catchAsync from '../../utils/catchAsync'

//Get Response
const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDB()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  })
})

//Get Data
const getSingleStudent: RequestHandler = catchAsync(async (req, res) => {
  const studentId = req.params.studentId
  const result = await StudentServices.getSingleStudentsFromDB(studentId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  })
})

//Update or delete data
const deleteStudent: RequestHandler = catchAsync(async (req, res) => {
  const studentId = req.params.studentId
  const result = await StudentServices.deleteStudentsFromDB(studentId)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  })
})

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
}
