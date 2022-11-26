import styled from 'styled-components';

export const Conteiner  = styled.button`
    padding: 1rem 2.5rem;
    border: none;
    font-size: 2rem;
    background-image: linear-gradient(to left, #A115E4, #8257E6);
    border-radius: 2rem;
    margin-top: 1rem;

    a {
        color: #fff;
    }

    &:hover {
        transform: scale(1.1);
    }
`;

export const Texto = styled.p`
    font-size: 1.6rem;
    color: #fff;
`;