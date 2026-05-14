import React from 'react'
import "./faq.css"
import { useTranslation } from 'react-i18next'

export const Faq = () => {

 const {t, i18n}= useTranslation

  return (
    <>
      <section class="faq">
        <div class="container">
          <div class="faq__left">
            <h2 class="faq__logo">{t("faq.title")}</h2>
          </div>

          <div class="faq__right">
            <div class="faq__item">
              <div class="faq__title">
                <h3>{t("faq.list_title")}</h3>
                <button class="faq__btn">⌄</button>
              </div>
              <p class="faq__text">{t("faq.list_text")}</p>
            </div>

            <div class="faq__item">
              <div class="faq__title">
                <h3>{t("faq.list_title")}</h3>
                <button class="faq__btn">⌄</button>
              </div>
              <p class="faq__text">{t("faq.list_text")}</p>
            </div>

            <div class="faq__item">
              <div class="faq__title">
                <h3>{t("faq.list_title")}</h3>
                <button class="faq__btn">⌄</button>
              </div>
              <p class="faq__text">{t("faq.list_text")}</p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
