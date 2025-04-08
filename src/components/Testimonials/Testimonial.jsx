import { BiSolidQuoteAltLeft } from "react-icons/bi";


function Testimonial({children, title, name, src, alt}) {
  return (
    <div className='testimonial'>
      <div className="testimonial-image">
        <img src={src} alt={alt} />
      </div>
      <div className='review'>
        <div className="testimonial-icon">
          <BiSolidQuoteAltLeft />
        </div>
          <p className="testimonial-text">{children}</p>
          <p className="testimonial-name">{name}</p>
          <p className="testimonial-title">{title}</p>
      </div>
    </div>
  )
}

export default Testimonial
