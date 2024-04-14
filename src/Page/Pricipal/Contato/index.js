import React from "react";
import { BoxTitulo } from "../../../Components/BoxTitulo";
import CardEndereco from "../../../Components/CardEndereco";

import style from "./formulario.module.css";
import { Footer } from "../../../Components/Footer";

export function Contato() {
  return (
    <div className={style.page}>
      <BoxTitulo titulo="CONTATO" traco="_____" />

      <div className={style.card}>
        <CardEndereco />
      </div>
      <div className={style.texto}>
        Preencha o formulário abaixo e clique em enviar. Responderemos sua
        mensagem o mais rápido possível!
      </div>

      <div className={style.containerDiv}>
        <form
          className={style.form}
          action="https://formsubmit.co/cidamunizz2015@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Recebemos sua mensagem! Obrigada pelo contato! Respoderemos em breve."
          />

          <label>Nome:</label>
          <input
            className={style.input}
            type="text"
            name="name"
            placeholder="Digite seu nome"
          />
          <label>Email:</label>
          <input
            className={style.input}
            type="email"
            name="email"
            placeholder="Digite seu email"
          />
          <label>Menssagem:</label>
          <textarea
            className={style.textarea}
            placeholder="Digite sua mensagem..."
            name="message"
          />
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/obrigada"
          />
          <input className={style.button} type="submit" value="Enviar" />
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
}
