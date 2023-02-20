import Menu from "./assets/Menu.jsx"
import { useState } from "react";

const App = () => {
  let text = "FULL</>STACK";

  const [menu, setMenu] = useState(false)


  function showSetMenu (){
    return setMenu(!menu)
  }
  return (
    <>
      <nav className="flex items-center justify-between px-2 py-5 bg-black text-white">
        <a href="#">
          <b>{text}</b>
        </a>

        <ul className={menu ? "flex flex-col gap-8 items-center justify-center fixed h-full inset-0 bg-black text-white transition-all":"w-0 overflow-hidden fixed "}>
          <li className="hover:scale-110 hover:border-b hover:transition-all hover:py-5">
            <a href="#">HOME</a>
          </li>
          <li  className="hover:scale-110 hover:border-b hover:transition-all hover:py-5">
            <a href="#">PORTFOLIO</a>
          </li>
          <li  className="hover:scale-110 hover:border-b hover:transition-all hover:py-5">
            <a href="#">ABOUT ME</a>
          </li>
          <li className="hover:scale-110 hover:border-b hover:transition-all hover:py-5">
            <a href="#">CONTACT</a>
          </li>
          <form>
            <div className="relative rounded-md overflow-hidden">
              <label className="absolute right-0 p-2 text-black">S</label>
              <input type="text" name="Contact" placeholder="Search" className="w-full h-full py-2 pl-2"/>
            </div>
          </form>
        </ul>

        <Menu props={showSetMenu}/>

      </nav>

      <div className="max-w-xl mx-auto"></div>
    </>
  );
};

export default App;