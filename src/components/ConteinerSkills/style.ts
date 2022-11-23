import styled from 'styled-components';

export const Conteiner  = styled.section`
    width: 100%;
    margin: 5rem auto;
    display: flex;
    flex-direction: column;
`;

export const Heading = styled.h2`
    margin-bottom: 2.4rem;
    text-align: center;
    font-size: 4rem;
`;

export const ConteinerSkills = styled.div`
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;


    @media (max-width: 513px) {
        padding: 0 1rem;
    }
`;