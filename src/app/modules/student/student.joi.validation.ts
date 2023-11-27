import Joi from 'joi'

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .max(20)
    .pattern(/^[A-Z][a-zA-Z]*$/)
    .messages({
      'any.required': 'First Name is required',
      'string.empty': 'First Name cannot be empty',
      'string.max': 'First Name should not exceed 20 characters',
      'string.pattern.base':
        'First Name should start with a capital letter and contain only alphabetic characters',
    }),
  middleName: Joi.string().trim(),
  lastName: Joi.string()
    .required()
    .trim()
    .pattern(/^[a-zA-Z]*$/)
    .messages({
      'any.required': 'Last Name is required',
      'string.empty': 'Last Name cannot be empty',
      'string.pattern.base':
        'Last Name should contain only alphabetic characters',
    }),
})

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required(),
  fatherOccupation: Joi.string().required(),
  fatherContactNo: Joi.string().required(),
  motherName: Joi.string().required(),
  motherOccupation: Joi.string().required(),
  motherContactNo: Joi.string().required(),
})

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required(),
  occupation: Joi.string().required(),
  contactNo: Joi.string().required(),
  address: Joi.string().required(),
})

const studentValidationJoiSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameValidationSchema.required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  dateOfBirth: Joi.string(),
  email: Joi.string().email().required(),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloodGroup: Joi.string().valid(
    'A+',
    'A-',
    'B+',
    'B-',
    'O+',
    'O-',
    'AB+',
    'AB-',
  ),
  presentAddress: Joi.string().required(),
  permanentAdress: Joi.string().required(),
  guardian: guardianValidationSchema.required(),
  localGuardian: localGuardianValidationSchema.required(),
  profileImg: Joi.string().required(),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
})

export default studentValidationJoiSchema
