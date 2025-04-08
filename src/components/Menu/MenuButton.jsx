import React from 'react'
import {MenuContext} from './Menu'

function MenuButton({children}) {

  // imported the toggle function from the context

  const { toggleOpen } = React.useContext(MenuContext)
  return (
    <button className='menu-button' onClick={toggleOpen}>{children}</button>
  )
}

export default MenuButton
