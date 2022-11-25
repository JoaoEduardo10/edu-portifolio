import styled from 'styled-components';

export const Conteiner  = styled.div`
    position: relative;
    background-color: #212121;
    width: 12rem;
    height: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0 3rem 0 0;

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

    h3 {
        font-size: 1.6rem;
        margin-bottom: 1.6rem;
        color: ${props => props.theme.colors.purple_200};
    }

    svg {
        font-size: 6rem;
        color: ${props => props.theme.colors.purple_200};
    }

    &:hover {
        transform: scale(1.2);
    }
`;