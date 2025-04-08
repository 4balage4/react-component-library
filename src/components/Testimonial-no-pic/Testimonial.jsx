import { BiSolidQuoteAltLeft } from "react-icons/bi";


function Testimonial({children, title, name}) {
  return (
    <div className='testimonial-no-pic'>
      <div className='-no-pic-review'>

        <div className="testimonial-logo">
          <img src='src/images/download.png' alt='company logo' />
        </div>
          <p className="testimonial-no-pic-text">{children}</p>
          <p className="testimonial-no-pic-name">{name} <span className="span-blue"> / </span>{title}</p>
      </div>
    </div>
  )
}

export default Testimonial
