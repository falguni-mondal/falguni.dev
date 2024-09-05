import React from 'react'

const SectionHeading = ({heading, size='text-[18vw]', color='text-zinc-800', font, tracking='tracking-tighter'}) => {
  return (
    <h1 className={`mx-auto ${size} lg:text-[8vw] font-semibold ${tracking} textured-text pb-2 lg:pb-4 leading-none ${font} ${color}`}>{heading}</h1>
  )
}

export default SectionHeading