import ToggleTheme from '../../components/ToggleTheme'
import ActionList from '../../sections/ActionList'
import EmailBox from '../../sections/EmailBox'
import ResizableContainer from '../../components/ResizebleContainer'
import { useState } from 'react'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [actionListWidth, setActionListWidth] = useState<number>(30)

  return (
    <div className="px-10 bg-neutral-200 dark:bg-slate-900 h-screen">
      <ToggleTheme />
      <div className="flex">
        <ResizableContainer
          initialWidth={actionListWidth}
          onResize={(newResize) => setActionListWidth(newResize)}
        >
          <ActionList />
        </ResizableContainer>
        <div className="w-full">
          <EmailBox />
        </div>
      </div>
    </div>
  )
}

export default Home
