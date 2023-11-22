import { Request, Response } from 'express'
import { StudentServices } from './student.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body
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

export const StudentController = {
  createStudent,
}
