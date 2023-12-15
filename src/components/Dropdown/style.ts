import tw from 'tailwind-styled-components'

export const DropdownContainer = tw.div`flex items-center justify-center`

export const DropdownWrapper = tw.div`hidden space-x-10 md:flex`

export const DropdownBox = tw.div`relative`

export const DropdownButton = tw.button`text-gray-900 group p-4 inline-flex items-center rounded-md bg-white text-base font-medium hover:text-orange-500`

export const DropdownOptions = tw.div`absolute left-1/2 z-full mt-3 w-[15rem] max-w-md -translate-x-1/2 transform px-2 sm:px-0`

export const DropdownOptionsBox = tw.div`overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5`

export const DropdownOptionsItems = tw.div`relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8`

export const DropdownOptionslink = tw.a`-m-3 flex items-start rounded-lg p-3 hover:bg-orange-500`

export const DropdownItemContent = tw.div`ml-4`

export const DropdownText = tw.p`text-base font-medium text-gray-900 hover:text-slate-200 transition-color duration-200`
