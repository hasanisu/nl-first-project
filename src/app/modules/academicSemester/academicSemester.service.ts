import { academicSemesterNameCodeMapper } from './academicSemester.constant'
import { TAcademicSemester } from './academicSemester.interface'
import { AcademicSemester } from './academicSemester.model'

const createAcademicSemesterIntoDB = async (payLoad: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payLoad.name] !== payLoad.code) {
    throw new Error('Invalid Semester Code')
  }

  const result = await AcademicSemester.create(payLoad)
  return result
}

const getAllAcademicSemesterFormDB = async () => {
  const result = await AcademicSemester.find()
  return result
}
const getSingleAcademicSemesterFormDB = async (id: string) => {
  const result = await AcademicSemester.findById(id)
  return result
}
const updateAcademicSemesterFormDB = async (
  id: string,
  payLoad: Partial<TAcademicSemester>,
) => {
  if (
    payLoad.name &&
    payLoad.code &&
    academicSemesterNameCodeMapper[payLoad.name] !== payLoad.code
  ) {
    throw new Error('Invalid Semester Code')
  }
  const result = await AcademicSemester.findByIdAndUpdate(
    { _id: id },
    payLoad,
    { new: true },
  )
  return result
}

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getSingleAcademicSemesterFormDB,
  updateAcademicSemesterFormDB,
  getAllAcademicSemesterFormDB,
}
