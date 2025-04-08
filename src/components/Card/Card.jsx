import { FaCartArrowDown } from "react-icons/fa";

function Card({children}) {
  return (
    <div className="card-component">
      <h2>Card component</h2>
      <div className="card">
        <div className="icon">
          <FaCartArrowDown/>
        </div>
        <div className="card-info">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Card
