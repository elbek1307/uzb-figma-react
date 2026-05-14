import React from 'react'
import "./fut.css"

import up from "./up.svg"
import logo from "./nlogo.svg"
import { LuMapPin } from "react-icons/lu"
import { BsTelephone } from "react-icons/bs"
import { useTranslation } from 'react-i18next'

export const Fut = () => {
    const {t, i18n} = useTranslation()
  return (
    <>
      <footer>
        <div className="container">
           
            <img src={logo} alt="" className="fut_logo" />
            
            <div className="fut_content">
                <div className="fut_box">
                    <LuMapPin  className='fut_icon'/>
                    <a className="fut_box_link" href="#">{t("footer.map")}</a>
                    <img src={up} alt="" />
                </div>
                
                <div className="fut_box">
                    <BsTelephone  className='fut_icon'/>
                    <a className="fut_box_link" href="tel:+998940993434">+998 94 099 3434</a>
                    <img src={up} alt="" />
                </div>

                
                <hr />

                <div className="fut_wrap">
                    <div className="fut_wrap_btn">
                        <h3>{t("footer.facebook")}</h3>
                        <img src={up} alt="" />
                    </div>
                    <div className="fut_wrap_btn">
                        <h3>{t("footer.instagram")}</h3>
                        <img src={up} alt="" />
                    </div>
                    <div className="fut_wrap_btn">
                        <h3>{t("footer.telegram")}</h3>
                        <img src={up} alt="" />
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}