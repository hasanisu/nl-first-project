import { Schema, model } from 'mongoose'
import { Guardian, LocalGuardian, Student, UserName } from './student.interface'

//instance of schema
const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
})

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
})

const localGuardiaSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
})

//Step-2
//create a schema
const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,

  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  presentAddress: { type: String, required: true },
  permanentAdress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardiaSchema,
  profileImg: { type: String, required: true },
  isActive: ['active', 'blocked'],
})

///Create a model
/// Step-3

export const StudentModel = model<Student>('Student', studentSchema)
