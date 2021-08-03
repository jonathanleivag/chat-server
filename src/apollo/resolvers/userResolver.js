import UserModel from '../../db/models/UserModel'
import { validationCreteUserSchema } from './validations/userValidation'
import bcryptjs from 'bcryptjs'
import { sign, verify } from '../../helpers/jwt'

export default {
  Query: {
    reNewToken: async (_, __, { token }) => {
      const { email } = verify(token)

      const user = await UserModel.findOne({ email })

      if (!user) {
        throw new Error('Usuario no registrado')
      }
      const { id, name, online, createdAt, updatedAt, email: email0 } = user
      const user0 = { id, name, online, createdAt, updatedAt, email: email0 }
      return { token: sign(user0), user: user0 }
    },
    isLogin: (_, __, { token }) => {
      try {
        verify(token)
        return true
      } catch (error) {
        return false
      }
    }
  },
  Mutation: {
    createUser: async (_, { input }) => {
      const valid = await validationCreteUserSchema.isValid(input)

      if (!valid) {
        await validationCreteUserSchema.validate(input)
      }

      const { email, password } = input
      const user = await UserModel.findOne({ email })

      if (user) {
        throw new Error('El usuario ya esta registrado')
      }

      const salt = await bcryptjs.genSalt(10)
      input.password = await bcryptjs.hash(password, salt)
      const newUser = new UserModel(input)

      const {
        id,
        name,
        email: email0,
        online,
        createdAt,
        updatedAt
      } = await newUser.save()

      return {
        data: { id, name, email: email0, online, createdAt, updatedAt },
        message: 'El usuario se creo con correctamente',
        token: sign({ id, name, email0, online, createdAt, updatedAt })
      }
    },
    login: async (_, { input }) => {
      const { email, password } = input
      const user = await UserModel.findOne({ email })

      if (!user) {
        throw new Error('Usuario no registrado')
      }

      if (!(await bcryptjs.compare(password, user.password))) {
        throw new Error('Error de credenciales')
      }

      const { id, name, email: email0, online, createdAt, updatedAt } = user
      return {
        data: user,
        token: sign({ id, name, email: email0, online, createdAt, updatedAt }),
        message: 'Se inicio sesión correctamente'
      }
    }
  }
}
