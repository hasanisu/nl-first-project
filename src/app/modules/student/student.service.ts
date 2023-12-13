import { Student } from './student.model'

//Get all students
const getAllStudentsFromDB = async () => {
  const result = await Student.find()
  return result
}

//Get students by id
const getSingleStudentsFromDB = async (id: string) => {
  // const result = await Student.findOne({ id })
  const result = await Student.aggregate([{ $match: { id: id } }])
  return result
}

const deleteStudentsFromDB = async (id: string) => {
  // real life e amra delete korba na amra data k update korbo, ekta kon id k korbo r second ki update korbo
  const result = await Student.updateOne({ id }, { isDeleted: true })
  return result
}

export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
  deleteStudentsFromDB,
}
