import React, {useState} from 'react'
import IndexPage from '../pages/IndexPage'
import Navigation from '../widgets/navigation'
import Header from '../widgets/header';

const App = () => {
  const [isActiveNav, setIsActiveNav] = useState(false);
  return (
    <div className='h-screen'>
      <Header toggleNav={() => setIsActiveNav(!isActiveNav)} isActiveNav={isActiveNav} />
      <IndexPage />
      <Navigation isActive={isActiveNav} />
    </div>
  )
}

export default App