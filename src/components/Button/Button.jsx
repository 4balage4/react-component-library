import React from 'react'
import classnames from 'classnames'
// using classnames library: https://www.npmjs.com/package/classnames

function Button({children, className, ...rest}) {
  let allClasses = classnames(className)


  return (

    <button className={allClasses} {...rest}>{children}</button>
  )
}

export default Button
