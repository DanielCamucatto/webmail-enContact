import tw from 'tailwind-styled-components'

export const InputStyle = tw.input`
w-full 
h-14
block 
leading-5 
relative 
py-2 
px-4 
rounded 
bg-neutral-10 
dark:bg-transparent 
border 
focus:border-2 
border-gray-500 
overflow-x-auto 
focus:outline-none 
focus:border-primary-600 
focus:ring-0 
dark:text-neutral-200 
dark:border-gray-400 
dark:focus:border-primary-200 peer
`

export const LabelStyle = tw.label`
absolute 
tracking-[.03125em] 
text-neutral-200 
dark:text-neutral-200 
bg-neutral-200 
dark:bg-transparent 
duration-300 
transform 
px-1 
-translate-y-7
scale-75 
top-4 
z-10 
origin-[0] 
left-4 
peer-focus:left-4 
peer-focus:text-primary-600 
dark:peer-focus:text-primary-200 
peer-placeholder-shown:scale-100 
peer-placeholder-shown:translate-y-0 
peer-focus:scale-75 
peer-focus:-translate-y-7 
peer-focus:bg-neutral-10 
dark:peer-focus:bg-gray-900 
peer-focus:px-1 
`
