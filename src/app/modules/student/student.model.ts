import { Schema, model } from 'mongoose'
import {
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TStudentModel,
  TStudentsMethod,
  TUserName,
} from './student.interface'
import validator from 'validator'

import config from '../../config'
import { boolean } from 'joi'

//instance of schema
const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'Name is Required'],
    trim: true,
    maxlength: [20, 'First Name allowed can not be more than 20'],
    // customer validation first name capitalize er jonno
    // validate: {
    //   validator: function (value: string) {
    //     const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1)
    //     return firstNameStr === value
    //   },
    //   message: `{VALUE} is not in capitalize format`,
    // },
  },
  middleName: { type: String, trim: true },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required'],
    // validate: {
    //   validator: (value: string) => validator.isAlpha(value),
    //   message: `{VALUE} is not valid`,
    // },
  },
})

const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
})

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
})

//Step-2
//create a schema
const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: { type: String, required: [true, 'Id is required'], unique: true },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User d is required'],
      unique: true,
      ref: 'User',
    },
    name: { type: userNameSchema, required: true },

    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'other'],
        message: `{VALUE} is not valid`,
      },
      required: true,
    },
    dateOfBirth: { type: String },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: (value: string) => validator.isEmail(value),
      message: `{VALUE} is not a valid email type`,
    },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    },
    presentAddress: { type: String, required: true },
    permanentAdress: { type: String, required: true },
    guardian: {
      type: guardianSchema,
      required: true,
    },
    localGuardian: {
      type: localGuardianSchema,
      required: true,
    },
    profileImg: { type: String, required: true },
    admissionSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemester',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
)

// Virtual
studentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`
})

//// This is Query Middleware
studentSchema.pre('find', async function (next) {
  this.find({ isDeleted: { $ne: true } })
  next()
})
studentSchema.pre('findOne', async function (next) {
  this.find({ isDeleted: { $ne: true } })
  next()
})

////This is Aggregate Middleware
studentSchema.pre('aggregate', async function (next) {
  // unshift ta hosse sobar prothome eita kaj korbe
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } })
  next()
})

//Creating a custom static method
studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id })
  return existingUser
}

// Creating a custom Instance Method
// studentSchema.methods.isUserExists = async function (id: string) {
//   const existingUser = await Student.findOne({ id })
//   return existingUser
// }

///Create a model
/// Step-3

export const Student = model<TStudent, TStudentModel>('Student', studentSchema)
