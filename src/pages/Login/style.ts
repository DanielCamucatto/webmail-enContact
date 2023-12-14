import tw from 'tailwind-styled-components'

export const SectionLogin = tw.section` 
flex 
items-center 
justify-center 
h-screen
`
export const ContainerLogin = tw.div`
container  
p-10
`

export const WrapperLogin = tw.div`
w-full 
flex 
flex-wrap 
items-center 
justify-center 
text-neutral-800 
dark:text-neutral-200
text-neutral-200
`
export const BoxLogin = tw.div`
block 
rounded-lg 
bg-gray-900
shadow-lg 
`

export const FlexWrapContainer = tw.div`
flex
lg:flex-wrap
`
export const BoxLoginLeft = tw.div`
px-4 
md:px-0 
lg:w-6/12
`
export const BoxLoginLeftItem = tw.div`
md:mx-6 
md:p-12
`
export const BoxLoginRight = tw.div`
flex 
items-center 
rounded-b-lg 
lg:w-6/12 
lg:rounded-r-lg 
lg:rounded-bl-none
bg-gradient-to-r from-orange-400 via-red-500 to-purple-600
`
export const BoxLoginRightItem = tw.div`
px-4 
py-6 
text-white 
md:mx-6 
md:p-12
`
