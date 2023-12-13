import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import sendResponse from '../../utils/sendResponse'
import { UserService } from './user.service'

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Creating a schema a validation zod

    //   const student = req.body.student //old way
    const { password, student: studentData } = req.body

    // Data Validation using ZOD
    //   const zodParseData = studentValidationSchema.parse(student)

    const result = await UserService.createStudentIntoDB(password, studentData)

    // console.log(error, value)
    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something went wrong',
    //     error: error.details,
    //   })
    // }

    //send Response
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

export const UserController = {
  createStudent,
}
