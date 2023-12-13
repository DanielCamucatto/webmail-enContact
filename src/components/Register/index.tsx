import { RegisterStyle, SectionRegister, TitleRegister } from './style'

type RegisterProps = {
  titleRegister: string
  textButton: string
}

const Register = ({ titleRegister, textButton }: RegisterProps) => {
  return (
    <SectionRegister>
      <TitleRegister>{titleRegister}</TitleRegister>
      <RegisterStyle>{textButton}</RegisterStyle>
    </SectionRegister>
  )
}

export default Register
