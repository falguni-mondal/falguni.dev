import React from 'react'

const SectionHeading = ({heading, size='text-[18vw]', color='text-zinc-800', font, tracking='tracking-tighter'}) => {
  return (
    <h1 className={`mx-auto ${size} font-semibold ${tracking} textured-text pb-2 leading-none ${font} ${color}`}>{heading}</h1>
  )
}

export default SectionHeading