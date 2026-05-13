import React from 'react'
import "./faq.css"

export const Faq = () => {
  return (
    <>
      <section class="faq">
        <div class="container">
          <div class="faq__left">
            <h2 class="faq__logo">FAQ</h2>
          </div>

          <div class="faq__right">
            <div class="faq__item">
              <div class="faq__title">
                <h3>Kursdan nima topaman</h3>
                <button class="faq__btn">⌄</button>
              </div>
              <p class="faq__text">
                Bu bir nonti kaypidaiy kapy darsga qatnasha olmasangiz, darsdan
                so‘ng guruhingizga zoom zapisi tashlab beriladi
              </p>
            </div>

            <div class="faq__item">
              <div class="faq__title">
                <h3>Kursdan nima topaman</h3>
                <button class="faq__btn">⌄</button>
              </div>
              <p class="faq__text">Bu yerda boshqa text bo‘ladi</p>
            </div>

            <div class="faq__item">
              <div class="faq__title">
                <h3>Kursdan nima topaman</h3>
                <button class="faq__btn">⌄</button>
              </div>
              <p class="faq__text">
                Bu bir nonti kaypidaiy kapy darsga qatnasha olmasangiz, darsdan
                so‘ng guruhingizga zoom zapisi tashlab beriladi
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
