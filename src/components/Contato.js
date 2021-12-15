import React from "react";
import style from "./Contato.module.css";
import photo from "../assets/images/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <>
      <Head
        title="RooterProject | Contato"
        description="This is a project from Origamid!!!"
      />
      <section className={`${style.contato} animeLeft`}>
        <img src={photo} alt="Máquina de escrever" />
        <div>
          <h1>Entre em contato</h1>
          <ul className={style.dados}>
            <li>email@email.com</li>
            <li>+99 (99) 99999-9999</li>
            <li>Rua Logo Ali, 999</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Contato;
