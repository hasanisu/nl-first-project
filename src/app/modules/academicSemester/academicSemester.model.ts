import { model, Schema } from 'mongoose'
import { TAcademicSemester } from './academicSemester.interface'
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from './academicSemester.constant'

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    required: true,
    enum: AcademicSemesterName,
  },
  code: {
    type: String,
    required: true,
    enum: AcademicSemesterCode,
  },
  year: {
    type: String,
    required: true,
  },
  startMonth: {
    type: String,
    required: true,
    enum: Months,
  },
  endMonth: {
    type: String,
    required: true,
    enum: Months,
  },
})

academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExist = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  })
  if (isSemesterExist) {
    throw new Error('Semester is laready exist')
  }
  next()
})

export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
)
