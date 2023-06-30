import React from 'react'
import classNames from 'classnames'
import LanguagePicker from '../../shared/language-picker'

import {ReactComponent as XCross} from './cross.svg';
import {ReactComponent as Equal} from './equal.svg';

const Header = ({toggleNav, isActiveNav}) => {
  return (
    <div className={classNames(
      'flex justify-between w-full p-2',
      {'fixed top-0 z-10': isActiveNav}
    )}>
      {isActiveNav ? <LanguagePicker /> : <img src='svgs\hamburger.svg' alt='logo' width={40} height={40} />}
      {isActiveNav
        ? <XCross onClick={() => toggleNav()} width={40} height={40} />
        : <Equal onClick={() => toggleNav()} width={35} height={35} />}
    </div >
  )
}

export default Header