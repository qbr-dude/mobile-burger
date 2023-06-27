import React from 'react'
import Button from '../shared/uikit/Button'
import classNames from 'classnames'

const Header = ({toggleNav, isActiveNav}) => {
  return (
    <div className={classNames(
        'flex justify-between w-full',
        {'fixed top-0': isActiveNav}
    )}>
        <div>#logo</div>
        <Button onClick={toggleNav}>toggle</Button>
    </div>
  )
}

export default Header