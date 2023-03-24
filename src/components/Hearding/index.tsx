import * as S from "./style";

import { useAppSelector } from "../../store/hookes";

type Props = {
  text: string;
};

export const Hearding = ({ text }: Props) => {
  const { colorOn } = useAppSelector((item) => item.menu);

  return <S.Conteiner colorOn={colorOn}>{text}</S.Conteiner>;
};
