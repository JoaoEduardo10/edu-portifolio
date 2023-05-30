import React from "react";
import * as S from "./style";

import { FiMenu } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";

import { useAppSelector, useAppDispatch } from "../../store/hookes";
import { addmenu, addColor } from "../../store/interfaces/menu/menuSlice";

export const TopBar = () => {
  const { project } = useAppSelector((item) => item.completeProject);
  const { menuOn, colorOn } = useAppSelector((item) => item.menu);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (menuOn) {
      dispatch(addmenu(false));
      return;
    }
    dispatch(addmenu(true));
  };

  const handleClickBackground = () => {
    if (colorOn) {
      dispatch(addColor(false));
      return;
    }
    dispatch(addColor(true));
  };

  return (
    <S.Conteiner aria-label="Conteiner TopBar" project={project}>
      <S.ConteinerIconMenu>
        {menuOn ? (
          <HiOutlinePlus
            aria-label="Fechar menu"
            className="svg"
            onClick={handleClick}
          />
        ) : (
          <FiMenu aria-label="Abrir Menu" onClick={handleClick} />
        )}
      </S.ConteinerIconMenu>
      <S.Hearding>Portifólio</S.Hearding>
      <S.ConteinerBackground
        aria-label="Botão de Alteração de Fundo"
        className={`${colorOn ? "round-left" : "round-right"}`}
        onClick={handleClickBackground}
      >
        <S.Roundbackground></S.Roundbackground>
      </S.ConteinerBackground>
    </S.Conteiner>
  );
};
