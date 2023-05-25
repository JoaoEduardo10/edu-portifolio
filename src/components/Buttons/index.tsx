import React from "react";
import * as S from "./style";

export type ButtonDownload = {
  link: string;
  text: string;
};

export type PropsButtonClick = {
  text: string;
  handleClick: () => void;
};

export const ButtoDownload = ({ link, text }: ButtonDownload) => {
  return (
    <S.Conteiner>
      <a role={"link"} href={link} download>
        {text}
      </a>
    </S.Conteiner>
  );
};

export const ButtonLinks = ({ link, text }: ButtonDownload) => {
  return (
    <S.Conteiner>
      <a href={link} target={"blank"} rel="noreferrer">
        {text}
      </a>
    </S.Conteiner>
  );
};
