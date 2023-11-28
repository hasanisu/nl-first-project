import { Request, Response } from 'express'
import { StudentServices } from './student.service'
import studentValidationJoiSchema from './student.joi.validation'
import { z } from 'zod'
import studentValidationSchema from './student.validation'

const createStudent = async (req: Request, res: Response) => {
  try {
    // Creating a schema a validation zod

    const student = req.body.student //old way
    // const { student: studentData } = req.body.student

    // Data validation using Joi
    // const { error, value } = studentValidationJoiSchema.validate(student)

    // Data Validation using ZOD
    const zodParseData = studentValidationSchema.parse(student)

    const result = await StudentServices.createStudentIntoDB(zodParseData)

    // console.log(error, value)
    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something went wrong',
    //     error: error.details,
    //   })
    // }

    //send Response
    res.status(200).json({
      sucess: true,
      message: 'Student is created successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    })
  }
}

//Get Response
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB()

    res.status(200).json({
      sucess: true,
      message: 'Students are retriveed successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    })
  }
}

//Get Data
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId
    const result = await StudentServices.getSingleStudentsFromDB(studentId)

    res.status(200).json({
      sucess: true,
      message: 'Students are retriveed successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    })
  }
}

//Update or delete data
const deleteStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId
    const result = await StudentServices.deleteStudentsFromDB(studentId)
    res.status(200).json({
      sucess: true,
      message: 'Students is delted successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    })
  }
}

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  deleteStudent,
}
