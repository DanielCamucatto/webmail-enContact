import React, { useState } from 'react'
import {
  AccordionContainer,
  AccordionContainerBox,
  AccordionTitle,
  AccordionTitleButton,
  AccordionTitleButtonSpan,
  AccordionContentBox,
  AccordionContent,
} from './style'

import { IoMdArrowDropright } from 'react-icons/io'

interface AccordionItem {
  title: string
  content: string
}

interface AccordionProps {
  items: AccordionItem[]
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null)

  const handleItemClick = (title: string) => {
    setActiveItem(activeItem === title ? null : title)
  }

  return (
    <AccordionContainer>
      {items.map((item) => (
        <AccordionContainerBox key={item.title}>
          <AccordionTitle className="mb-0">
            <AccordionTitleButton
              type="button"
              data-te-collapse-init
              data-te-target={`#flush-collapse${item.title}`}
              aria-expanded={activeItem === item.title}
              aria-controls={`flush-collapse${item.title}`}
              onClick={() => handleItemClick(item.title)}
              className="flex items-center justify-between"
            >
              <span className="flex items-center">
                <AccordionTitleButtonSpan
                  className={`transform ${
                    activeItem === item.title ? 'rotate-90' : 'rotate-0'
                  } transition-transform duration-200 ease-in-out`}
                >
                  <IoMdArrowDropright style={{ fontSize: '25px' }} />
                </AccordionTitleButtonSpan>
                {item.title}
              </span>
              <div className="ml-auto">15</div>
            </AccordionTitleButton>
          </AccordionTitle>
          <AccordionContentBox
            id={`flush-collapse${item.title}`}
            className={`!visible ${
              activeItem === item.title ? '' : 'hidden'
            } border-0`}
            data-te-collapse-item
            aria-labelledby={`flush-heading${item.title}`}
          >
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionContentBox>
        </AccordionContainerBox>
      ))}
    </AccordionContainer>
  )
}

export default Accordion
