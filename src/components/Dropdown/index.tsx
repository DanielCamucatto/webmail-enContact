import { useState } from 'react'
import {
  DropdownContainer,
  DropdownWrapper,
  DropdownBox,
  DropdownButton,
  DropdownOptions,
  DropdownOptionsBox,
  DropdownOptionsItems,
  DropdownOptionslink,
  DropdownText,
  DropdownItemContent,
} from './style'

type DropdownProps = {
  name: string
  options1: string
  options2?: string
  options3?: string
}
const Dropdown = ({ name, options1, options2, options3 }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownContainer>
      <DropdownWrapper>
        <DropdownBox onClick={() => setIsOpen(!isOpen)}>
          <DropdownButton type="button" aria-expanded={isOpen}>
            <span>{name}</span>
            <svg
              className={`text-gray-400 ml-2 h-5 w-5 ${
                isOpen ? 'rotate-180 duration-300' : 'duration-300'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </DropdownButton>

          {isOpen && (
            <DropdownOptions>
              <DropdownOptionsBox>
                <DropdownOptionsItems>
                  <DropdownOptionslink href="#">
                    <DropdownItemContent>
                      <DropdownText>{options1}</DropdownText>
                    </DropdownItemContent>
                  </DropdownOptionslink>

                  <DropdownOptionslink href="#">
                    <DropdownItemContent>
                      <DropdownText>{options2}</DropdownText>
                    </DropdownItemContent>
                  </DropdownOptionslink>

                  <DropdownOptionslink href="#">
                    <DropdownItemContent>
                      <DropdownText>{options3}</DropdownText>
                    </DropdownItemContent>
                  </DropdownOptionslink>
                </DropdownOptionsItems>
              </DropdownOptionsBox>
            </DropdownOptions>
          )}
        </DropdownBox>
      </DropdownWrapper>
    </DropdownContainer>
  )
}

export default Dropdown
