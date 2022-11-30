import styled from 'styled-components';

export const Conteiner  = styled.section`
    height: 90vh;
    margin-top: -10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ConteinerText = styled.div`
    width: 70%;
    margin: 0% auto;

    h3 {
        margin-bottom: 1.6rem;
        font-size: 2.7rem;
        color: ${props => props.theme.colors.purple_200};
    }

    @media (max-width: 441px) {
        width: 100%;
    }
`;

export const Paragrafo = styled.p`
    margin-bottom: 1.6rem;
    font-size: 2rem;
    color: #828282;

    @media (max-width: 441px) {
        font-size: 1.6rem;
    }
`;