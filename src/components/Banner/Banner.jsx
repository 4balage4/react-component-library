import React from 'react'

function Banner({children, icon, variant, text}) {
  return (
    <div className={`banner banner-${variant}`}>
        <div className='icon'>
          {icon}
      </div>
      <div className="banner-infos">
        <h3 className="banner-title">{children}</h3>
        {text && (<p className="banner-text">{text}</p>)}
      </div>
    </div>
  )
}

export default Banner
