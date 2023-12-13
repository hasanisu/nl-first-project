import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import sendResponse from '../../utils/sendResponse'
import { StudentServices } from './student.service'

//Get Response
const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB()
    sendResponse(res, {
      statsusCode: httpStatus.OK,
      success: true,
      message: 'Student is created succesfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

//Get Data
const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const studentId = req.params.studentId
    const result = await StudentServices.getSingleStudentsFromDB(studentId)

    sendResponse(res, {
      statsusCode: httpStatus.OK,
      success: true,
      message: 'Student is created succesfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

//Update or delete data
const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const studentId = req.params.studentId
    const result = await StudentServices.deleteStudentsFromDB(studentId)
    sendResponse(res, {
      statsusCode: httpStatus.OK,
      success: true,
      message: 'Student is created succesfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
}
