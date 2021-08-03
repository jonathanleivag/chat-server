import * as yup from 'yup'

export const validationCreteUserSchema = yup.object().shape({
  name: yup
    .string()
    .required('El campo nombre es requerido')
    .min(3, 'El nombre tiene que ser mayor que que 2 caracteres'),
  email: yup
    .string()
    .email('Tiene que ser un formato de email valido')
    .required('El email es requerido'),
  password: yup
    .string()
    .required('El campo de la contraseña es requerido')
    .min(8, 'La contraseña tiene que tener 8 caracteres'),
  password0: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir'),
  online: yup.boolean()
})
