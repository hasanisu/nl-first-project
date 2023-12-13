import config from '../../config'
import { TStudent } from '../student/student.interface'
import { Student } from '../student/student.model'
import { TUser } from './user.interface'
import { User } from './user.model'

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
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

  // set manually generated id
  userData.id = '2030100001'

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
    studentData.id = newUser.id
    studentData.user = newUser._id //Reference _id

    const newStudent = await Student.create(studentData)
    return newStudent
  }
  return newUser
}

export const UserService = {
  createStudentIntoDB,
}
