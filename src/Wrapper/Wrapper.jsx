import React from 'react'

function Wrapper(props) {
  return (
    <div className='min-h-screen max-w-full flex items-center justify-center'>
        {props.children}
    </div>
  )
}

export default Wrapper