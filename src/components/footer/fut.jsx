import React from 'react'
import "./fut.css"

import up from "./up.svg"
import logo from "./nlogo.svg"
import { LuMapPin } from "react-icons/lu"
import { BsTelephone } from "react-icons/bs"

export const Fut = () => {
  return (
    <>
      <footer>
        <div className="container">
           
            <img src={logo} alt="" className="fut_logo" />
            
            <div className="fut_content">
                <div className="fut_box">
                    <LuMapPin  className='fut_icon'/>
                    <a className="fut_box_link" href="#">Toshkent shahri Yashnabod tumani Mo’ljal Sergeli-4 bekat</a>
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
                        <h3>Facebook</h3>
                        <img src={up} alt="" />
                    </div>
                    <div className="fut_wrap_btn">
                        <h3>Instagram</h3>
                        <img src={up} alt="" />
                    </div>
                    <div className="fut_wrap_btn">
                        <h3>Telegram</h3>
                        <img src={up} alt="" />
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}