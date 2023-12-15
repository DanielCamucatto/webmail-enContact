import tw from 'tailwind-styled-components'

export const AccordionContainer = tw.div`mb-0`
export const AccordionContainerBox = tw.div`rounded border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-transparent dark:border-neutral-600 `
export const AccordionTitle = tw.h2`mb-0`
export const AccordionTitleButton = tw.button`
group 
relative 
flex 
items-center 
justify-between
w-full 
items-center 
rounded-none 
border-0 
bg-transparent
py-4 
text-left 
text-base 
text-slate-900 
transition [overflow-anchor:none] 
hover:z-[2] 
focus:z-[3] 
focus:outline-none 
dark:bg-transparent
dark:text-white [&:not([data-te-collapse-collapsed])]: [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-slate-900 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
export const AccordionTitleButtonSpan = tw.span`mr-6 h-5 w-5 shrink-0 rotate-[0deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white`
export const AccordionContentBox = tw.div``
export const AccordionContent = tw.div`px-5 py-4`
