import styled from 'styled-components';

export const Conteiner  = styled.aside`
    position: fixed;
    top: 0%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 6rem;
    background-color: ${props => props.theme.colors.purple_black};
    border-bottom: .1rem solid ${props => props.theme.colors.purple_100};

    @media (max-width: 523px) {
        padding: 2rem 1rem;
    }
`;

export const ConteinerIconMenu = styled.div`
    svg {
        font-size: 4rem;
        color: ${props => props.theme.colors.purple_200};
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
    background-color: ${props => props.theme.colors.purple_200};
    padding: .5rem;
    width: 10rem;
    border-radius: 3rem;
    cursor: pointer;
    display: flex;

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