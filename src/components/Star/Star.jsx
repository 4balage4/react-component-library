import { BsStar, BsStarFill } from "react-icons/bs";
import useToggle from "../../hooks/useToggle"


export default function Star() {

  // calling the useToggle hook
  // without parameters will be false and no function (i dont need it)
  const [on, toggle] = useToggle()

    return (
        <>
          <h2>Star component</h2>
            {
                on ?
                    <BsStarFill onClick={toggle} className="star filled" /> :
                    <BsStar onClick={toggle} className="star" />
            }
        </>
    )
}
