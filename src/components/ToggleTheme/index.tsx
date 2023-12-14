import { Switch } from '@headlessui/react'
import { useEffect, useState } from 'react'

const ToggleTheme = () => {
  const [isChecked, setIsChecked] = useState(false)

  const toggleThemeChange = (checked: boolean) => {
    if (checked) {
      sessionStorage.theme = 'dark'
      setIsChecked(true)
    } else {
      sessionStorage.theme = 'light'
      setIsChecked(false)
    }
  }

  useEffect(() => {
    if (sessionStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
      setIsChecked(true)
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isChecked])

  return (
    <div className="flex flex-row items-center justify-end px-2 justif bg-neutral-100 dark:bg-neutral-900 transition-color duration-500">
      <p className="font-bold text-neutral-900 dark:text-amber-400 mr-2">
        {isChecked ? 'Tema dark ativado' : 'Tema light ativado'}
      </p>

      <div className="py-8">
        <Switch
          checked={isChecked}
          onChange={(checked: boolean) => {
            toggleThemeChange(checked)
          }}
          className={`${
            isChecked
              ? 'bg-amber-400 focus:ring-amber-500'
              : 'bg-neutral-700 focus:ring-neutral-800'
          }relative inline-flex h-[20px] w-[40px] shadow-md cursor-pointer rounded-full items-center focus:outline-none focus:ring-2 focus:ring-offset-2`}
        >
          <span className="sr-only">Toggle Theme</span>
          <span
            className={`${
              isChecked ? 'translate-x-5' : 'translate-x-1'
            } pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
    </div>
  )
}

export default ToggleTheme
