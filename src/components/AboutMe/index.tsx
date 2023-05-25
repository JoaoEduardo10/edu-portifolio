import { Hearding } from "../Hearding";
import * as S from "./style";
import React from "react";

export const AboutMe = () => {
  return (
    <S.Conteiner
      aria-label="Conteiner AboutMe"
      data-aos="fade-right"
      id="sobre"
    >
      <Hearding text="Sobre mim" />
      <S.ConteinerText>
        <h3>Teresina, PI</h3>
        <S.Paragrafo>
          Olá, meu nome é João Eduardo e sou apaixonado por tecnologia. Tive meu
          primeiro contato com programação quando meu primo me mostrou como
          criar uma calculadora com Python. Fiquei fascinado com a ideia de
          poder criar algo tão incrível e decidi aprender mais sobre
          programação.
        </S.Paragrafo>
        <S.Paragrafo>
          Atualmente, tenho conhecimentos em algumas tecnologias tanto de
          front-end quanto de back-end e continuo estudando constantemente,
          ciente de que a aprendizagem é uma jornada contínua. Busco sempre me
          aprimorar e descobrir novas tecnologias para continuar evoluindo como
          desenvolvedor. Estou animado para continuar aprendendo e crescendo no
          mundo da tecnologia!
        </S.Paragrafo>
      </S.ConteinerText>
    </S.Conteiner>
  );
};
