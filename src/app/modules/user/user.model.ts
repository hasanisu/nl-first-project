/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from 'mongoose'
import config from '../../config'
import { TUser } from './user.interface'
import bcrypt from 'bcrypt'

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['student', 'faculty', 'admin'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

// Creating pre save middleware/hook: will work on create() and save() fucntion
userSchema.pre('save', async function (next) {
  // console.log(this, 'pre middleware will save the data')

  const user = this // this indicate current document

  // hashing password and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  )
  next()
})

// Creating post save middleware/hook
userSchema.post('save', function (doc, next) {
  doc.password = '' // password ta empty string hishebe db te save korar jonno
  next()
})

export const User = model<TUser>('User', userSchema)
