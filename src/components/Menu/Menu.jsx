import React from 'react'
import useToggle from '../../hooks/useToggle'


// creating context for the menu
const MenuContext = React.createContext().Provider

export default function Menu({ children}) {

  // creating a toggle state and set it to false.
  // the menu is closed by default
  const [open, toggleOpen] = useToggle(false)

  return (
    <div className='menu-component'>
      <MenuContext value={{ open, toggleOpen }}>
        <h2>Menu</h2>
        <div className="menu">
          {children}
        </div>
      </MenuContext>

    </div>
  )
}

export {MenuContext}
