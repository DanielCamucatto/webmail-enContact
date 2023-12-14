import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Register from '../../components/Register'

const Form = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (ev: FormEvent) => {
    ev.preventDefault()

    if (userName === 'admin' && password === '123') {
      navigate('/home')
    } else {
      toast.error('Credenciais inválidas. A senha é admin e 123')
      setUserName('')
      setPassword('')
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <p className="mb-4">Por favor faça o login com sua conta </p>
      <div className="relative mb-4">
        <Input
          label={'Nome de usuário'}
          type={'text'}
          placeholder={''}
          value={userName}
          onChange={setUserName}
        />
      </div>

      <div className="relative mb-4">
        <Input
          label={'Password'}
          type={'password'}
          placeholder={''}
          value={password}
          onChange={setPassword}
        />
      </div>

      <div className="mb-12 pb-1 pt-1 text-center">
        <Button
          text={'login'}
          direction={'to right'}
          color1={'#ee7724'}
          color2={'#d8363a'}
          color3={'#dd3675'}
          color4={'#b44593'}
          type="submit"
        />

        <a href="#" className="hover:underline transition duration-300">
          Esqueceu sua senha?
        </a>
      </div>
      <Register
        titleRegister={'Ainda não tem uma conta?'}
        textButton={'Registre-se'}
      />
    </form>
  )
}

export default Form
