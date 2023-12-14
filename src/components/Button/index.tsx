import { ButtonStyle } from './style'

type ButtonProps = {
  text: string
  direction: string
  color1: string
  color2: string
  color3: string
  color4: string
  type: 'button' | 'submit' | 'reset'
}

const Button = ({
  text,
  direction,
  color1,
  color2,
  color3,
  color4,
  type,
}: ButtonProps) => {
  const gradientStyle = {
    background: `linear-gradient(${direction}, ${color1}, ${color2}, ${color3}, ${color4})`,
  }

  return (
    <ButtonStyle type={type} style={gradientStyle}>
      {text}
    </ButtonStyle>
  )
}

export default Button
