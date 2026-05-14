import React, { useState } from "react";
import axios from "axios";
import "./ma.css";
import odam from "./odam.png";
import { useTranslation } from "react-i18next";

export const Ma = () => {
  const [ism, setism] = useState("");
  const [nomer, setnomer] = useState("");

  const sendMessege = (event) => {
    event.preventDefault();

    const token = "8630844136:AAESFihnONhmYUb7zrX7Z24JY9xxHtMfd1Y";
    const chat_id = 8572947616;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const messageContent = `Ism: ${ism}\nNomer: ${nomer}`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: messageContent,
      },
    })
      .then(() => {
        alert("Xabaringiz muvaffaqiyatli yuborildi! ✅");

        setism("");
        setnomer("");
      })
      .catch((err) => {
        console.error(err);
        alert("Xatolik yuz berdi! ❌");
      });
  };

  const { t, i18n } = useTranslation();

  return (
    <>
      <section className="ma">
        <div className="container">
          <form className="ma_form" onSubmit={sendMessege}>
            <h3 className="ma_form_title">{t("ma.inp_title")}</h3>

            <input
              className="ma_form_inp"
              type="text"
              placeholder={t("ma.inp_login")}
              value={ism}
              onChange={(event) => setism(event.target.value)}
              required
            />
            <input
              className="ma_form_inp"
              type="tel"
              placeholder={t("ma.inp_nomer")}
              value={nomer}
              onChange={(event) => setnomer(event.target.value)}
              required
            />

            <span className="form_box">
              <input className="ma_form_inp" type="checkbox" required />{t("inp_check")}</span>
            <button type="submit" className="ma_form_btn">{t("ma.button")}</button>
          </form>

          <div className="ma_content">
            <h2 className="ma_title">{t("ma.title")} </h2>
          </div>

          <img src={odam} alt="odam" className="ma_img" />
        </div>
      </section>
    </>
  );
};
