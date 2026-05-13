import React from 'react'
import "./ma.css"

import odam from "./odam.png"

export const Ma = () => {
  return (
    <>
      <section className="ma">
        <div className="container">
          <form className="ma_form">
            <h3 className="ma_form_title">Malumotingizni <br /> qoldiring</h3>
            
            <input className="ma_form_inp" type="text" placeholder="ism" />
            <input className="ma_form_inp" type="tel" placeholder="+998" />
            
            <span className="form_box">
                <input className="ma_form_inp" type="checkbox" />
                Maxfiylik siyosati
            </span>
            <button className="ma_form_btn">Yozilish</button>
          </form>

          <div className="ma_content">
            <h2 className="ma_title">
              Bizga ko'p yillardan beri <br />
              kompaniyamizga ishonch <br />
              bildirganlar talaygina
            </h2>
          </div>

          <img src={odam} alt="odam" className="ma_img" />
        </div>
      </section>
    </>
  )
}