import { InputStyle, LabelStyle } from './style'

type LabelProps = {
  label: string
  type: string
  placeholder: string
  value: string
  onChange: (value: string) => void
}

const Input = ({ label, type, placeholder, value, onChange }: LabelProps) => {
  return (
    <div className="relative flex flex-col">
      <div className="relative z-0">
        <InputStyle
          type={type}
          aria-label="inputtext"
          name="inputtext"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <LabelStyle>{label}</LabelStyle>
      </div>
    </div>
  )
}

export default Input
