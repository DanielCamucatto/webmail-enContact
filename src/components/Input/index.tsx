import { InputStyle, LabelStyle } from './style'

type LabelProps = {
  label: string
  type: string
  placeholder: string
}

const Input = ({ label, type, placeholder }: LabelProps) => {
  return (
    <>
      <InputStyle type={type} placeholder={placeholder} />
      <LabelStyle>{label}</LabelStyle>
    </>
  )
}

export default Input
