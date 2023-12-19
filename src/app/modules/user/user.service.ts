import config from '../../config'
import { TAcademicSemester } from '../academicSemester/academicSemester.interface'
import { AcademicSemester } from '../academicSemester/academicSemester.model'
import { TStudent } from '../student/student.interface'
import { Student } from '../student/student.model'
import { TUser } from './user.interface'
import { User } from './user.model'

const createStudentIntoDB = async (password: string, payLoad: TStudent) => {
  // get form the model
  //  // Using Static method
  // if (await Student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists!')}

  //create a user object
  // Partial ta hosse optional data
  const userData: Partial<TUser> = {}

  //if password is not given, use deafult password
  userData.password = password || (config.default_pass as string)

  //set student role
  userData.role = 'student'

  //Auto generate id
  // year, semesterCode 4 digit number
  const generateStudentId = (payLoad: TAcademicSemester) => {
    //padStart hosse koi digit er number nibo oita
    // first time 0000 hobe
    const currentId = (0).toString()
    let incrementId = (Number(currentId) + 1).toString().padStart(4, '0')
    incrementId = `${payLoad.year}${payLoad.code}${incrementId}`

    return incrementId
  }

  //find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payLoad.admissionSemester,
  )

  // set manually generated id
  userData.id = generateStudentId(admissionSemester)

  // create a user
  const newUser = await User.create(userData) //built in static method

  // create instance for instance method
  // const student = new Student(studentData) // create an instance
  //   if (await student.isUserExists(studentData.id)) {
  //     throw new Error('User already exists!')
  //   }
  // const result = await student.save() // built in instance method

  // create a student
  if (Object.keys(newUser).length) {
    // set id, _id as user
    payLoad.id = newUser.id
    payLoad.user = newUser._id //Reference _id

    const newStudent = await Student.create(payLoad)
    return newStudent
  }
  return newUser
}

export const UserService = {
  createStudentIntoDB,
}
