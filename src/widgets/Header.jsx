import React from 'react'
import Button from '../shared/uikit/Button'
import classNames from 'classnames'
import LanguagePicker from '../shared/language-picker'

const Header = ({toggleNav, isActiveNav}) => {
  return (
    <div className={classNames(
      'flex justify-between w-full',
      {'fixed top-0': isActiveNav}
    )}>
      {isActiveNav ? <LanguagePicker /> : <div>#logo</div>}
      <Button onClick={toggleNav}>toggle</Button>
    </div>
  )
}

export default Header