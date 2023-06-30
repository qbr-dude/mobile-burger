import React from 'react'
import {useMobileBreakpoint} from './../shared/utils/useBreakpoint';

const IndexPage = () => {
  const isMobile = useMobileBreakpoint();
  return (
    <div className='flex justify-center items-center w-full h-5/6'>
      <span className='text-4xl font-medium'>
        {isMobile
          ? 'Burger is available'
          : 'Reduce the screen size'}
      </span>
    </div>
  )
}

export default IndexPage