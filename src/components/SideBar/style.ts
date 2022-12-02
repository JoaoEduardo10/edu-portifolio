import styled from 'styled-components';

export const Conteiner  = styled.div<{ menuOn: boolean }>`
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 200;
    top: 12%;
    background-color: rgba(0,0,0,0.65);
    backdrop-filter: blur(1rem);
    font-family: 'Poppins', sans-serif;
    display: ${props => props.menuOn ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    gap: 10rem;
    padding: 2rem;


    &.showsidebar {
        animation: sidebar 200ms ease;
    }

    @keyframes sidebar {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0%);
        }
    }
`;

export const Titulo = styled.h1`
    color: ${props => props.theme.colors.purple_200};
    font-size: 3.5rem;
    margin-top: 7rem;
    text-align: center;

    @media (max-width: 539px) {
        margin-top: 3rem;
        font-size: 2.7rem;
    }
`;

export const Nav = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
    
`;

export const Links = styled.li`
    
    &:hover {
        transform: scale(1.3);
        cursor: pointer;
    }

    a {
        color: #fff;
        font-size: 3rem;


        &:hover {
            color: ${props => props.theme.colors.purple_200};
            text-decoration: underline;
        }
    }
`;