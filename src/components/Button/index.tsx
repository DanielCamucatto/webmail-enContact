import { FormEvent } from 'react'
import { ButtonStyle } from './style'

type ButtonProps = {
  text: string
  direction: string
  color1: string
  color2: string
  color3: string
  color4: string
}

const Button = ({
  text,
  direction,
  color1,
  color2,
  color3,
  color4,
}: ButtonProps) => {
  const gradientStyle = {
    background: `linear-gradient(${direction}, ${color1}, ${color2}, ${color3}, ${color4})`,
  }

  const handleLogin = (ev: FormEvent) => {
    ev.preventDefault()
    console.log('Oi')
  }

  return (
    <ButtonStyle onClick={handleLogin} style={gradientStyle}>
      {text}
    </ButtonStyle>
  )
}

export default Button
