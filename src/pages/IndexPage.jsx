import React, {useState} from 'react'

const IndexPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  window.matchMedia('(max-width: 768px)').addEventListener('change', (e) => setIsMobile(e.matches))
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