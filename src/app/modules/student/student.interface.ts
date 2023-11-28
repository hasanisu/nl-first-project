import { Model } from 'mongoose'

export type TGuardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}

export type TUserName = {
  firstName: string
  middleName?: string
  lastName: string
}

export type TLocalGuardian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}

//Step-1

export type TStudent = {
  id: string
  password: string
  name: TUserName
  gender: 'male' | 'female' | 'other'
  dateOfBirth?: string
  email: string
  avatar?: string
  contactNo: string
  emergencyContactNo: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-'
  presentAddress: string
  permanentAdress: string
  guardian: TGuardian
  localGuardian: TLocalGuardian
  profileImg?: string
  isActive: 'active' | 'blocked'
  isDeleted: boolean
}

// For Creating Static

export interface StudentModel extends Model<TStudent> {
  isUserExists(id: stirng): Promise<TStudent | null>
}

// For Creating instance

// export interface TStudentsMethod {
//   isUserExists(id: string): Promise<TStudent | null> // jehe promise hishebe ekta data send korbe and shei data Student type er data hobe
// }
// export type TStudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   TStudentsMethod
// >
