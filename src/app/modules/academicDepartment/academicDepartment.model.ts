import { model, Schema } from 'mongoose'
import { TAcademicDepartment } from './academicDepartment.interface'

const academicDeapartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      res: 'AcademicFaculty',
    },
  },
  {
    timestamps: true,
  },
)

export const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  academicDeapartmentSchema,
)
