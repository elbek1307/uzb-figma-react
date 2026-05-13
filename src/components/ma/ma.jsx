import React, { useState } from 'react'; // 1. useState import qilindi
import axios from 'axios';               // 2. axios import qilindi
import "./ma.css";
import odam from "./odam.png";

export const Ma = () => {
  const [ism, setism] = useState("");
  const [nomer, setnomer] = useState("");

  const sendMessege = (event) => {
    event.preventDefault();
    
    // 3. URL to'g'irlandi (// qo'shildi)
    const token = "8630844136:AAESFihnONhmYUb7zrX7Z24JY9xxHtMfd1Y";
    const chat_id = 8572947616;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // 4. getElementById o'rniga state dagi o'zgaruvchilar ishlatildi
    const messageContent = `Ism: ${ism}\nNomer: ${nomer}`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: messageContent,
      }
    })
    .then(() => {
      alert("Xabaringiz muvaffaqiyatli yuborildi! ✅");
      // Formani tozalash
      setism("");
      setnomer("");
    })
    .catch((err) => {
      console.error(err);
      alert("Xatolik yuz berdi! ❌");
    });
  };

  return (
    <>
      <section className="ma">
        <div className="container">
          <form className="ma_form" onSubmit={sendMessege}>
            <h3 className="ma_form_title">Malumotingizni <br /> qoldiring</h3>
            
            <input 
                className="ma_form_inp" 
                type="text" 
                placeholder="ism" 
                value={ism} // State bilan bog'landi
                onChange={(event) => setism(event.target.value)} 
                required 
            />
            <input 
                className="ma_form_inp" 
                type="tel" 
                placeholder="+998" 
                value={nomer} // State bilan bog'landi
                onChange={(event) => setnomer(event.target.value)} 
                required 
            />
            
            <span className="form_box">
                <input className="ma_form_inp" type="checkbox" required />
                Maxfiylik siyosati
            </span>
            <button type="submit" className="ma_form_btn">Yozilish</button>
          </form>

          <div className="ma_content">
            <h2 className="ma_title">
              Bizga ko'p yillardan beri <br />
              kompaniyamizga ishonch <br />
              bildirganlar talaygina
            </h2>
          </div>

          <img src={odam} alt="odam" className="ma_img" />
        </div>
      </section>
    </>
  );
};