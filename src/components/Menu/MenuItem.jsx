import React from 'react'


// this component creates every single menu item
// I pass in value as a children.
function MenuItem({children}) {

  function handleClick(event) {
    event.preventDefault()
    alert(`${event.target.innerHTML} button was clicked!`)
  }

  return (
    <button onClick={handleClick} className='menu-item'>
      {children}
    </button>
  )
}

export default MenuItem
