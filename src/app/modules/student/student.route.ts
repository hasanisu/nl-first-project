import express from 'express'
import { StudentController } from './student.controller'

const router = express.Router()

//Will call controller function
router.post('/create-student', StudentController.createStudent)
