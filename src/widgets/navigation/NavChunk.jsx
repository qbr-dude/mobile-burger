import React from 'react';
import {ReactComponent as Arrow} from './right-arrow.svg';

const NavChunk = ({text, onClick}) => {
  const handleClick = () => onClick(text);
  return (
    <div 
      className='flex items-center justify-between w-full mb-5'
      onClick={handleClick}
      >
        <span className='text-2xl'>{text}</span> 
        <Arrow width={20} height={20}/>
    </div>
  )
}

export default NavChunk