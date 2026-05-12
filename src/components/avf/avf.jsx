import React from 'react'
import "./avf.css"

import dokument from "./dokument.svg"
import miya from "./miya.svg"
import qol from "./qol.svg"



export const Avf = () => {
  return (
    <>
       <section class="avf">
        <div class="container">
          <h2 class="avf_title">Avfzalliklarimiz</h2>
          <hr class="avf_hr" />
          <ul class="avf_list">
            <li class="avf_item">
              <img src={miya} alt="" class="avf_item_img" />
              <h3 class="avf_item_title">Tezda xizmat ko’rsatish</h3>
              <p class="avf_item_text">
                Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
                kompaniyamiz Mijozlarimiz bizdan mamnun
              </p>
            </li>
            <li class="avf_item">
              <img
                src={dokument}
                alt=""
                class="avf_item_img"
              />
              <h3 class="avf_item_title">Yetuk mutahasislaimiz</h3>
              <p class="avf_item_text">
                Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
                kompaniyamiz Mijozlarimiz bizdan mamnun
              </p>
            </li>
            <li class="avf_item">
              <img src={qol} alt="" class="avf_item_img" />
              <h3 class="avf_item_title">Sizga maqul vaqtda</h3>
              <p class="avf_item_text">
                Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
                kompaniyamiz Mijozlarimiz bizdan mamnun
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
