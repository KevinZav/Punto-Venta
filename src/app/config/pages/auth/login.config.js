import { minLengthPassword } from "@/app/shared/validators/auth.validators";

export const loginConfig = {
  title: 'Iniciar Sesión',
  inputs: {
    userId: {
      labelText: 'Usuario',
      placeholder: 'Agrega un usuario correcto',
    },
    password: {
      labelText: 'Contraseña',
      placeholder: 'Agrega correctamente tu contraseña',
      messageHelp: 'Ingresa una contraseña correcta',
      validators: [minLengthPassword]
    },
  },
  forgotPasswordText: '¿Olvidaste tu contraseña?',
  buttonSubmit: {
    text: 'Entrar'
  }
}