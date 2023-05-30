import styled from "styled-components";

export const Conteiner = styled.aside<{ project: boolean }>`
  position: fixed;
  top: 0%;
  width: 100%;
  z-index: 100;
  display: ${(props) => (props.project ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;
  background-color: ${(props) => props.theme.colors.purple_black};
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.purple_100};

  @media (max-width: 523px) {
    padding: 2rem 1rem;
  }
`;

export const ConteinerIconMenu = styled.div`
  svg {
    font-size: 4rem;
    color: ${(props) => props.theme.colors.purple_200};
    cursor: pointer;
  }

  .svg {
    transform: rotate(45deg);
    cursor: pointer;
  }

  @media (max-width: 523px) {
    svg {
      font-size: 2.6rem;
    }
  }
`;

export const Hearding = styled.h1`
  font-size: 3rem;

  @media (max-width: 523px) {
    font-size: 2.6rem;
  }
`;

export const ConteinerBackground = styled.div`
  padding: 0.5rem;
  width: 10rem;
  border-radius: 3rem;
  cursor: pointer;
  display: flex;

  &.round-left {
    justify-content: left;
    background-color: ${(props) => props.theme.colors.purple_200};
  }

  &.round-right {
    justify-content: right;
    background-color: #fff;
  }

  @media (max-width: 523px) {
    width: 9rem;
  }
`;

export const Roundbackground = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #000;
`;
