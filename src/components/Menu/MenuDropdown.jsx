import {MenuContext} from './Menu'
import React from 'react'

function MenuDropdown({children}) {

  // this is the dropdown menu. If the toggle is on it will be shown
  // if the toggle is off it will be hidden
  const { open } = React.useContext(MenuContext)


  return (
    <div className="menu-dropdown" hidden={!open}>
      {children}
    </div>
  )
}

export default MenuDropdown
