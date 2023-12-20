//Auto generate id

import { TAcademicSemester } from '../academicSemester/academicSemester.interface'
import { User } from './user.model'

const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0, //mongoose er auto id lagbe na
    },
  )
    .sort({ createdAt: -1 })
    .lean()
  return lastStudent?.id ? lastStudent.id : undefined
}

// year, semesterCode 4 digit number
export const generateStudentId = async (payLoad: TAcademicSemester) => {
  //padStart hosse koi digit er number nibo oita
  // first time 0000 hobe
  let currentId = (0).toString()

  const lastStudentId = await findLastStudentId()
  const lastStudentCode = lastStudentId?.substring(4, 6)
  const lastStudentYear = lastStudentId?.substring(0, 4)
  const currentStudentCode = payLoad.code
  const currentStudentYear = payLoad.year

  if (
    lastStudentId &&
    lastStudentCode === currentStudentCode &&
    lastStudentYear === currentStudentYear
  ) {
    currentId = lastStudentId.substring(6)
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0')
  incrementId = `${payLoad.year}${payLoad.code}${incrementId}`

  return incrementId
}
