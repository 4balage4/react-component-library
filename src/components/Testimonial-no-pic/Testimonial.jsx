import { BiSolidQuoteAltLeft } from "react-icons/bi";
import imgUrl from 'src/assets/download.png'

function Testimonial({children, title, name}) {
  return (
    <div className='testimonial-no-pic'>
      <div className='-no-pic-review'>

        <div className="testimonial-logo">
          <img src={imgUrl} alt='company logo' />
        </div>
          {children}
          <p className="testimonial-no-pic-name">{name} <span className="span-blue"> / </span>{title}</p>
      </div>
    </div>
  )
}

export default Testimonial
