import { TStudent } from './student.interface'
import { Student } from './student.model'

const createStudentIntoDB = async (studentData: TStudent) => {
  // get form the model
  //  // Using Static method
  if (await Student.isUserExists(studentData.id)) {
    throw new Error('User already exists!')
  }
  const result = await Student.create(studentData) //built in static method

  // create instance for instance method
  // const student = new Student(studentData) // create an instance
  //   if (await student.isUserExists(studentData.id)) {
  //     throw new Error('User already exists!')
  //   }
  // const result = await student.save() // built in instance method
  return result
}

//Get all students
const getAllStudentsFromDB = async () => {
  const result = await Student.find()
  return result
}

//Get students by id
const getSingleStudentsFromDB = async (id: string) => {
  const result = await Student.findOne({ id })
  return result
}

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
}
