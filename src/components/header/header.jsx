import React from 'react'
import "./header.css"

import logo from "./nlogo.svg"
import { useTranslation } from 'react-i18next'

const Header = () => {
   const {t, i18n} = useTranslation()
   const handChangeLaunguage = (event)=> {
    i18n.changeLanguage(event.target.value)
   }


  return (

    <>
    <nav>
        <div className="container">
          <img src={logo} alt="logo" />
          <ul className="nav_list">
            <li className="nav_item">
  <a href="#">{t("header.service")}</a>
</li>

<li className="nav_item">
  <a href="#">{t("header.about")}</a>
</li>

<li className="nav_item">
  <a href="#">{t("header.faq")}</a>
</li>

<li className="nav_item">
  <a href="#">{t("header.contact")}</a>
</li>
          </ul>

           <select name="" id="" onChange={handChangeLaunguage}>
            <option value="uz">UZ</option>
            <option value="ru">RUS</option>
            <option value="en">ENG</option>
           </select>

          <button className="nav_btn">{t("header.button")}</button>
        </div>
      </nav>

    </>
  )
}

export default Header