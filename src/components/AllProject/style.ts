import styled from 'styled-components';

export const Conteiner  = styled.div`
    padding: 1.6rem;
    margin-bottom: 5rem;
`;

export const Hearding  = styled.h3`
    position: relative;
    display: inline-block;
    font-size: 2.8rem;
    margin-top: 4rem;
    margin-bottom: 3rem;

    &::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 0.3rem;
        background-image: linear-gradient(90deg, #8257E6 0%, #A40EE4 92.32%);
        bottom: -0.1rem;
        left: 0;
    }
`;

export const Paragrafo = styled.p`
    display: none;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1.6rem;

    @media (max-width: 784px) {
        display: block;
    }
`;


export const ConteinerProject  = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 3rem;
`;