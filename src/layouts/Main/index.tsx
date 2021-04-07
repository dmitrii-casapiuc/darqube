import Toolbar from 'components/Toolbar'
import React from 'react'

interface IMainProps {
  children: JSX.Element
}

const Main: React.FC<IMainProps> = ({children}): JSX.Element => {
  return (
    <>
      <Toolbar />
      <div className="main">
        {children}
      </div>
    </>
  )
}

export default Main
