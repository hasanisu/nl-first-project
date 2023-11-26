import { Request, Response } from 'express'
import { StudentServices } from './student.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student //old way
    // const { student: studentData } = req.body.student
    //will call service func to send this data
    const result = await StudentServices.createStudentIntoDB(student)

    //send Response
    res.status(200).json({
      sucess: true,
      message: 'Student is created successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
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
  } catch (error) {
    console.log(error)
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
  } catch (error) {
    console.log(error)
  }
}

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
}