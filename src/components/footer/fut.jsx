import React from 'react'
import "./fut.css"

export const Fut = () => {
  return (
    <>
      <footer>
        <div className="container">
           
            <img src="./header_img/n logo.svg" alt="" className="fut_logo" />
            
            <div className="fut_content">
                <div className="fut_box">
                    <img className="fut_box_img" src="./main_img/map.svg" alt="" />
                    <a className="fut_box_link" href="#">Toshkent shahri Yashnabod tumani Mo’ljal Sergeli-4 bekat</a>
                    <img src="./main_img/up.svg" alt="" />
                </div>
                
                <div className="fut_box">
                    <img className="fut_box_img" src="./main_img/tel.svg" alt="" />
                    <a className="fut_box_link" href="tel:+998940993434">+998 94 099 3434</a>
                    <img src="./main_img/up.svg" alt="" />
                </div>

                
                <hr />

                <div className="fut_wrap">
                    <div className="fut_wrap_btn">
                        <h3>Facebook</h3>
                        <img src="./main_img/up.svg" alt="" />
                    </div>
                    <div className="fut_wrap_btn">
                        <h3>Instagram</h3>
                        <img src="./main_img/up.svg" alt="" />
                    </div>
                    <div className="fut_wrap_btn">
                        <h3>Telegram</h3>
                        <img src="./main_img/up.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}