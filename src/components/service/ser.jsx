import React from 'react'
import "./ser.css"


import kok from "./kok t.svg"
import cyan from "./cyan p.svg"
import yashil from "./yashil u.svg"
import { useTranslation } from 'react-i18next'

export const Ser = () => {
  const {t, i18n} = useTranslation()

  return (
    <>
    <section class="ser">
        <div class="container">
          <h2 class="ser_title">{t("service.title")}</h2>
          <p class="ser_text">{t("service.text")}</p>

          <ul class="ser_list">
            <li class="ser_item">
              <h3 class="ser_item_title">{t("service.list_title1")}</h3>
              <p class="ser_item_text">{t("service.list_text1")}</p>
              <a href="" class="ser_item_link">{t("service.list_link1")}</a>
              <img src={kok} alt="" class="ser_item_img" />
            </li>
            <li class="ser_item">
              <h3 class="ser_item_title">{t("service.list_title2")}</h3>
              <p class="ser_item_text ser_item_text--orta">{t("service.list_text2")}</p>
              <a href="" class="ser_item_link ser_item_link--orta">{t("service.list_link2")}</a>
              <img src={cyan} alt="" class="ser_item_img" />
            </li>
            <li class="ser_item">
              <h3 class="ser_item_title">{t("service.list_title3")}</h3>
              <p class="ser_item_text ser_item_text_yuqori">{t("service.list_text3")}</p>
              <a href="" class="ser_item_link ser_item_link--yuqori">{t("service.list_link3")}</a>
              <img src={yashil} alt="" class="ser_item_img" />
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
