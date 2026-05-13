import React from 'react'
import "./biz.css"


import xalat from "./oq xalat.png"

export const Biz = () => {
  return (
    <>
     <section class="biz">
        <div class="container">
          <img src={xalat} alt="" class="biz_img" />
          <div class="biz_content">
            <h2 class="biz_title">
              Bizga ko'p yillardan beri <br />
              kompaniyamizga ishonch <br />
              bildirganlar talaygina
            </h2>
            <button class="biz_btn">Bog’lanish</button>
          </div>
        </div>
      </section>
    </>
  )
}
