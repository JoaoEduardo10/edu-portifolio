import styled from 'styled-components';

export const Conteiner  = styled.div`
    width: 38.4rem;
    height: 24.2rem;
    border: .1rem solid black;
    
    
    &.notShow {
        transform: scale(1);
        transition: 300ms ease;
    }

    &.show {
        transform: scale(1.2);
        transition: 300ms ease;
    }

    &:hover {
        box-shadow: 0 0 5rem #fff;
        z-index: 100;


        img {
            opacity: .8;
        }
    }
`;

export const conteinerImg = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        opacity: .5;
    }

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




export const ConteinerData  = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`;

export const Hearding  = styled.h4`
    font-size: 3.6rem;
`;

export const ConteinerTecnologias = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    svg {
        font-size: 3rem;
        color: ${props => props.theme.colors.purple_200};
    }
`;
export const ConteinerDate = styled.div`
    background-color: #212121;
    padding: 1rem;
    border-radius: 0 0 3rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.show {
        animation: animated .5s ease;
    }

    @keyframes animated {
        0% {
            opacity: 0;
            transform: translateY(-100%);
        }

        50% {
            opacity: 0;
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    
`;

export const Data = styled.p`
    font-size: 1.6rem;
    display: inline-block;
`;

export const button = styled.button`
    outline: none;
    border: none;
    color: #fff;
    background-color: ${props => props.theme.colors.purple_200};
    padding: 1rem;
    width: 12rem;
    border-radius: 2rem;
    font-size: 1.6rem;
    cursor: pointer;

    
    &.color {
        animation: showColor 1s ease;
    }

    @keyframes showColor {
        0% {
            background-color: #ccc;
        }

        100% {
            background-color: ${props => props.theme.colors.purple_200};
        }
    }
`;

