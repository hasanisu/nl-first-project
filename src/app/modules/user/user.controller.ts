import httpStatus from 'http-status'
import sendResponse from '../../utils/sendResponse'
import { UserService } from './user.service'
import catchAsync from '../../utils/catchAsync'

const createStudent = catchAsync(async (req, res) => {
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
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  })
})

export const UserController = {
  createStudent,
}
