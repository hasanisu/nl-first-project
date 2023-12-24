import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { AcademicDepartmentServices } from './academicDepartment.service'

const createAcademicDepartment = catchAsync(async (req, res) => {
  const body = req.body

  const result =
    await AcademicDepartmentServices.createAcademicDepartmentIntoDb(body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Department is retrieved successfully',
    data: result,
  })
})

const getAllAcademicDepartments = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentServices.getAllAcademicDepartmentFromDB()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic department are retrieved successfully',
    data: result,
  })
})

const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params
  const result =
    await AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(
      departmentId,
    )
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic department is retrieved successfully',
    data: result,
  })
})

const updateAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params
  const result =
    await AcademicDepartmentServices.updateAcademicDepartmentIntoDB(
      departmentId,
      req.body,
    )
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic department is updated successfully',
    data: result,
  })
})

export const AcademicDepartmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
}
