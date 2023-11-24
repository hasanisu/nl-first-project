import { Student } from './student.interface'
import { StudentModel } from './student.model'

const createStudentIntoDB = async (student: Student) => {
  // get form the model
  const result = await StudentModel.create(student)
  return result
}

//Get all students
const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find()
  return result
}

//Get students by id
const getSingleStudentsFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id })
  return result
}

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
}
