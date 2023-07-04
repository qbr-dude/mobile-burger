import React from 'react';
import {ReactComponent as Arrow} from './right-arrow.svg';

const NavChunk = ({children, onClick}) => {
  const handleClick = () => onClick(children);
  return (
    <div
      className='flex items-center justify-between flex-1 mb-5'
      onClick={handleClick}
    >
      {children}
      <Arrow width={16} height={16} />
    </div>
  )
}

export default NavChunk