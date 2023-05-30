import React, { useEffect, useState } from "react";
import * as S from "./style";

import curriculo from "../../download/JoaoE.pdf";

import { TypeAnimation } from "react-type-animation";

import { theme } from "../../style/themes";

import { ButtoDownload } from "../Buttons";
import { BiCodeAlt } from "react-icons/bi";

import { useAppSelector } from "../../store/hookes";

export const Hearder = () => {
  const [nameOne, setNameOne] = useState(false);
  const [nameTwo, setNameTwo] = useState(false);
  const { colorOn } = useAppSelector((item) => item.menu);

  useEffect(() => {
    const time = setTimeout(() => {
      setNameOne(true);
    }, 1000);

    return () => clearTimeout(time);
  }, []);

  useEffect(() => {
    const time = setTimeout(() => {
      if (nameOne) {
        setNameTwo(true);
      }
    }, 2000);

    return () => clearTimeout(time);
  }, [nameOne]);

  return (
    <S.Conteiner aria-label="Conteiner Hearder" data-aos="fade-down">
      <S.Conteinertext aria-label="Conteiner Text" coloOn={colorOn}>
        <TypeAnimation
          sequence={["Olá, Sou o", 1000]}
          wrapper="h2"
          cursor={false}
          className="textOne"
          aria-label="Nome Inicial"
        />
        {nameOne && (
          <TypeAnimation
            sequence={["João Eduardo :)", 1000]}
            wrapper="h2"
            cursor={false}
            style={{ color: theme.colors.purple_200 }}
            className="textTwo"
            aria-label="Meu Nome"
          />
        )}

        {nameTwo && (
          <TypeAnimation
            sequence={[
              "Desenvolvedor Full Stack",
              1000,
              "Tecnologia que utilizo",
              1000,
              "HTML5 | CSS3 | JavaScript",
              3000,
              "TypeScript | React.js | Sass",
              3000,
              "NextJs | StoryBook | Jest",
              3000,
              "Redux | Context APi | API REST",
              3000,
              "Styled-Components | Git e GitHub",
              3000,
              "NodeJs | MongoDb | SQL",
              3000,
              "Docker | ExpressJs | Swagger",
              3000,
            ]}
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
            style={{ color: "#828282" }}
            className="text3"
            aria-label="Tecnologias"
          />
        )}

        <ButtoDownload link={curriculo} text="Download CV" />
      </S.Conteinertext>
      <S.ConteinerIcon role="img">
        <BiCodeAlt />
      </S.ConteinerIcon>
    </S.Conteiner>
  );
};
