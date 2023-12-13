import Button from '../../components/Button'
import Input from '../../components/Input'
import Register from '../../components/Register'

const Form = () => {
  return (
    <form>
      <p className="mb-4">Por favor faça o login com sua conta </p>
      {/* Username input */}
      <div className="relative mb-4" data-te-input-wrapper-init>
        <Input
          label={'Nome de usuário'}
          type={'text'}
          placeholder={'Digite o nome de usuário'}
        />
      </div>

      {/* Password input */}
      <div className="relative mb-4" data-te-input-wrapper-init>
        <Input
          label={'Password'}
          type={'password'}
          placeholder={'Digite sua senha'}
        />
      </div>

      {/* Submit button */}
      <div className="mb-12 pb-1 pt-1 text-center">
        <Button
          text={'login'}
          direction={'to right'}
          color1={'#ee7724'}
          color2={'#d8363a'}
          color3={'#dd3675'}
          color4={'#b44593'}
        />

        {/* Forgot password link */}
        <a href="#!">Forgot password?</a>
      </div>
      <Register
        titleRegister={'Ainda não tem uma conta?'}
        textButton={'Registre-se'}
      />
    </form>
  )
}

export default Form
