import styled from "styled-components";

export const Conteiner = styled.h2<{ colorOn: boolean }>`
  text-align: center;
  font-size: 4rem;
  margin-bottom: 2.5rem;
  color: ${(props) => (props.colorOn ? "#fff" : "#000")};
`;
