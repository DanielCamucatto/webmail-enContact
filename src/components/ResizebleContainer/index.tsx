import React, { useState } from 'react'

interface ResizableContainerProps {
  children: React.ReactNode
  initialWidth: number
  onResize: (newWidth: number) => void
}

const ResizableContainer: React.FC<ResizableContainerProps> = ({
  children,
}) => {
  const [width, setWidth] = useState(500)

  const handleResize = () => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', handleMouseMove)
    })

    function handleMouseMove(event: MouseEvent) {
      setWidth(event.clientX)
    }
  }

  return (
    <div style={{ width: `${width}px` }} className="resize-x ">
      <div className="w-full cursor-col-resize" onMouseDown={handleResize}>
        {children}
      </div>
    </div>
  )
}

export default ResizableContainer
