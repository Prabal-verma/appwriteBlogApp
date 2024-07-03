import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className={`flex justify-center items-center h-12 w-${width} bg-transparent`}>BLOG</div>
  )
}

export default Logo