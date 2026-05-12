import React from 'react'
import "./header.css"

import logo from "./nlogo.svg"

const Header = () => {
  return (
    <>
    <nav>
        <div className="container">
          <img src={logo} alt="logo" />
          <ul className="nav_list">
            <li className="nav_item"><a href="#">Service</a></li>
            <li className="nav_item"><a href="#">About</a></li>
            <li className="nav_item"><a href="#">Faq</a></li>
            <li className="nav_item"><a href="#">Contact</a></li>
          </ul>
          <button className="nav_btn">Kirish</button>
        </div>
      </nav>

    </>
  )
}

export default Header