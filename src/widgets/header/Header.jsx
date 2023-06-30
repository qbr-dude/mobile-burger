import React from 'react'
import classNames from 'classnames'
import LanguagePicker from '../../shared/language-picker'

import {ReactComponent as XCross} from './cross.svg';
import {ReactComponent as Equal} from './equal.svg';
import {useMobileBreakpoint} from './../../shared/utils/useBreakpoint';

const Header = ({toggleNav, isActiveNav}) => {
  const isMobile = useMobileBreakpoint();
  return (
    <div className='flex justify-between w-full p-2 fixed z-10'>
      <div className={classNames({
        'block': isActiveNav,
        'hidden': !isActiveNav,
      })}>
        <LanguagePicker />
      </div>
      <div className={classNames({
        'block': !isActiveNav,
        'hidden': isActiveNav,
      })}>
        <img src='svgs\hamburger.svg' alt='logo' width={40} height={40} />
      </div>
      {isMobile &&
        (isActiveNav
          ? <XCross onClick={() => toggleNav()} width={40} height={40} />
          : <Equal onClick={() => toggleNav()} width={35} height={35} />
        )}
    </div >
  )
}

export default Header