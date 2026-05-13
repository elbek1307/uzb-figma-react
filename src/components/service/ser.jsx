import React from 'react'
import "./ser.css"

import kok from "./kok t.svg"
import cyan from "./cyan p.svg"
import yashil from "./yashil u.svg"

export const Ser = () => {
  return (
    <>
    <section class="ser">
        <div class="container">
          <h2 class="ser_title">Service</h2>
          <p class="ser_text">
            Bu darsliklari sizning yuqori daraja olishingizga yordam beradi
          </p>

          <ul class="ser_list">
            <li class="ser_item">
              <h3 class="ser_item_title">
                Boshlang’ich <br />
                tushunchalar
              </h3>
              <p class="ser_item_text">nazariy bilimlar</p>
              <a href="" class="ser_item_link">16 dars</a>
              <img src={kok} alt="" class="ser_item_img" />
            </li>
            <li class="ser_item">
              <h3 class="ser_item_title">O’rta</h3>
              <p class="ser_item_text ser_item_text--orta">
                nazariy va Amaliy bilimlar
              </p>
              <a href="" class="ser_item_link ser_item_link--orta">23 dars</a>
              <img src={cyan} alt="" class="ser_item_img" />
            </li>
            <li class="ser_item">
              <h3 class="ser_item_title">Yuqori</h3>
              <p class="ser_item_text ser_item_text_yuqori">Amaliy bilimlar</p>
              <a href="" class="ser_item_link ser_item_link--yuqori">16 dars</a>
              <img src={yashil} alt="" class="ser_item_img" />
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
