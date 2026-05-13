import React from 'react'
import "./hero.css"


//rasmlar//
import cleaner from "./cleaner.jpg"
import middle from "./middle cyan.svg"
import tiny from "./tiny cyan.svg"
import hero_up from "./hero up.svg"
import disinfik from "./disinksiya.svg"

import { useTranslation } from 'react-i18next'


export const Hero = () => {
   const {t, i18n} = useTranslation()

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero_content">
            <h1 className="hero_title">{t("hero.title")}</h1>
            <p className="hero_text">{t("hero.text")}</p>
            <img className="h_tiny" src={tiny}  alt="" />
            <img className="h_mid" src={middle} alt="" />
            <img className="h_dis" src={disinfik} alt="" />
            <div className="hero_box">
              <button className="hero_btn">{t("hero.button")}</button>
              <a href="">
                <img
                  className="hero_up_img"
                  src={hero_up}
                  alt=""
                />
              </a>
            </div>
          </div>
          <img
        src={cleaner}
            alt="janitor man"
            className="hero_img"
          />
        </div>
      </section>
    </>
  )
}
