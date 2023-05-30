import styled from "styled-components";

export const Conteiner = styled.section`
  padding: 10rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 787px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const Conteinertext = styled.div<{ coloOn: boolean }>`
  display: flex;
  flex-direction: column;

  .textOne {
    font-size: 5rem;
    color: ${(props) => (!props.coloOn ? "black" : "#fff")};
  }

  .textTwo {
    font-size: 3.5rem;
  }

  .text3 {
    font-size: 1.5rem;
  }

  @media (max-width: 787px) {
    order: 2;
    width: 90%;

    .textOne {
      font-size: 4rem;
    }

    .textTwo {
      font-size: 2.3rem;
    }

    .text3 {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 339px) {
    order: 2;
    width: 90%;

    .textOne {
      font-size: 2.4rem;
    }

    .textTwo {
      font-size: 1.6rem;
    }

    .text3 {
      font-size: 1.6rem;
    }
  }
`;

export const ConteinerIcon = styled.div`
  svg {
    font-size: 40rem;
    color: ${(props) => props.theme.colors.purple_200};
    transition: all 300ms ease;
    animation: svg 3s infinite ease alternate-reverse;
  }

  svg:hover {
    transform: scale(1.2);
  }

  @keyframes svg {
    0% {
      transform: translateY(6%);
    }

    100% {
      transform: translateY(0);
    }
  }

  @media (max-width: 787px) {
    order: 1;
    width: 90%;

    svg {
      font-size: 20rem;
      margin-bottom: 2rem;
    }
  }
`;
