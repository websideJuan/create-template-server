import { useState } from "react"

const Menu = (props) => {
  const [menu, setMenu] = useState(false)
  return ( 
    <button onClick={() => {
        props.props()
        setMenu(!menu)
    }} className="relative z-30">
        <i className={`fa-solid ${menu ? 'fa-xmark':'fa-bars'}`}></i>
    </button>
  )
}


export default Menu