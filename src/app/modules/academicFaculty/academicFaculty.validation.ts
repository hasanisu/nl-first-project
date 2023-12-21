import { z } from 'zod'

const createAcademicFacultyValicationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic faculty must be string',
    }),
  }),
})
const updateAcademicFacultyValicationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic faculty must be string',
    }),
  }),
})

export const AcademicFacultyValidation = {
  createAcademicFacultyValicationSchema,
  updateAcademicFacultyValicationSchema,
}
