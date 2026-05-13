import React from 'react'
import "./klapa.css"

import { useTranslation } from 'react-i18next'

const Klapa = () => {
  const {t, i18n} = useTranslation()
  return (
    <>
       <section className="klapa">
        <div className="container">
          <div className="klapa_content">
            <h2 className="klapa_title">{t("klapa.title")}</h2>
            <p className="klapa_text">{t("klapa.text")} </p>
            <button className="klapa_btn">{t("klapa.button")}</button>
          </div>
        </div>
      </section>

    </>
  )
}

export default Klapa

