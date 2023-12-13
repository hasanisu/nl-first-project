/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
//Set up
import express, {
  Application,
  Request,
  response,
  Response,
  NextFunction,
} from 'express'
import cors from 'cors'
import { StudentRoutes } from './app/modules/student/student.route'
import { UserRoutes } from './app/modules/user/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import notFound from './app/middlewares/notFound'
import router from './app/routes'

const app: Application = express()

//parsers
app.use(express.json())
app.use(cors())

//application routes
app.use('/api/v1', router)

const test = (req: Request, res: Response) => {
  res.send('Hello World')
}

app.get('/', test)
app.use(globalErrorHandler)
app.use(notFound)
export default app
