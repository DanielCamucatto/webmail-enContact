import ToggleTheme from '../../components/ToggleTheme'
import ActionList from '../../sections/ActionList'

const Home = () => {
  return (
    <div className="px-10 bg-neutral-200 dark:bg-slate-900 h-screen">
      <ToggleTheme />
      <ActionList />
    </div>
  )
}

export default Home
