import tw from 'tailwind-styled-components'

export const AvatarContainer = tw.div`
relative inline-block
`
export const AvatarWrapper = tw.div`
p-1 rounded-full bg-gradient-to-tr from-orange-400 to-violet-700
`
export const AvatarButtonImg = tw.button`
block p-1 transition transform bg-slate-200 dark:bg-slate-900 rounded-full hover:-rotate-6 focus:outline-none
`
export const AvatarButtonOnline = tw.button`
absolute bottom-0 flex items-center justify-center w-8 h-8 font-mono text-2xl font-semibold text-white bg-green-500 border-4 border-slate-200 dark:border-slate-900 rounded-full right-1 hover:bg-green-700
`
export const AvatarModalLogout = tw.div`absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-slate-200 dark:bg-slate-900 dark:text-white border border-gray-200 shadow-md rounded-md p-2`

export const AvatarLogout = tw.button`block w-full text-left hover:bg-gray-100 px-2 py-1`

export const AvatarUserNameBox = tw.div`absolute left-1/2 transform -translate-x-1/2 bottom-[-2.5rem]`

export const AvatarUserNameLink = tw.a`font-bold uppercase mt-2 dark:text-slate-200`
