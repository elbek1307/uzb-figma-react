import React from 'react'
import "./biz.css"


import xalat from "./oq xalat.png"
import { useTranslation } from 'react-i18next'

export const Biz = () => {
  const {t, i18n} = useTranslation()
  return (
    <>
     <section class="biz">
        <div class="container">
          <img src={xalat} alt="" class="biz_img" />
      /    <div class="biz_content">
            <h2 class="biz_title">{t("biz.title")} </h2>
            <button class="biz_btn">{t("biz.button")}</button>
          </div>
        </div>
      </section>
    </>
  )
}
