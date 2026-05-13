import React from 'react'
import "./avf.css"

import dokument from "./dokument.svg"
import miya from "./miya.svg"
import qol from "./qol.svg"


import { useTranslation } from 'react-i18next'


export const Avf = () => {
 
  const {t, i18n} = useTranslation()

  return (
    <>
       <section className="avf">
        <div className="container">
          <h2 className="avf_title">{t("avf.title")}</h2>
          <hr className="avf_hr" />
          <ul className="avf_list">
            <li className="avf_item">
              <img src={miya} alt="" className="avf_item_img" />
              <h3 className="avf_item_title">{t("avf.1title")}</h3>
              <p className="avf_item_text">{t("avf.text")} </p>
            </li>
            <li className="avf_item">
              <img
                src={dokument}
                alt=""
                className="avf_item_img"
              />
              <h3 className="avf_item_title">{t("avf.2title")}</h3>
              <p className="avf_item_text">{t("avf.text")} </p>
            </li>
            <li className="avf_item">
              <img src={qol} alt="" className="avf_item_img" />
              <h3 className="avf_item_title">{t("avf.3title")}</h3>
              <p className="avf_item_text">{t("avf.text")} </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
