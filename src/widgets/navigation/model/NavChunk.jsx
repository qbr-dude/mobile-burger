import React from 'react';
import {ReactComponent as Arrow} from './right-arrow.svg';

const NavChunk = ({children, onClick}) => {
  const handleClick = () => onClick(children);
  return (
    <div
      className='flex items-center justify-between w-full mb-5'
      onClick={handleClick}
    >
      {children}
      <Arrow width={20} height={20} />
    </div>
  )
}

export default NavChunk