import React from "react";
import "./styles.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nylu5ae",
        "template_88riyas",
        form.current,
        "pnFFBZKIJhdVo5Mf9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <h2 className="formtitle">Queres conocernos MAS? Contactanos</h2>
        <label htmlFor="nombre">Nombre</label>
        <input className="Nombre" name="user_name"></input>
        <label htmlFor="email">Email</label>
        <input className="email" name="user_email"></input>
        <label htmlFor="comment">Dejanos tus comentarios</label>
        <textarea name="message" className="email"></textarea>
        <button type="submit" value="Send">
          Enviar
        </button>
      </form>
    </div>
  );
};
