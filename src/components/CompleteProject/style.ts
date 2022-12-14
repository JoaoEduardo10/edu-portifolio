import styled from 'styled-components';

export const Conteiner  = styled.section`
    position: fixed;
    margin:  0 auto;
    z-index: 200;
    left: 0%;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.65);
    display: flex;
    justify-content: center;
    align-items: center;

    &.aparecer {
        animation: animation 300ms ease;
    }

    @keyframes animation {
        0% {
            transform: translateX(-100%);
        }

        100% {
            transform: translateX(0);
        }
    }

    @media (max-width: 955px) {
        width: 100%;
        height: 100%;
    }
`;

export const ConteinerProject = styled.div`
    width: 80%;
    height: 90%;
    padding: 3rem;
    background-color: #13131F;
    display: flex;
    gap: 3.6rem;

    @media (max-width: 955px) {
        flex-direction: column;
        height: 100%;
        width: 100%;
        gap: 1rem;
    }

    @media (max-width: 331px) {
        gap: 1rem;
        padding: 1.5rem;
        
    }
   
`;

export const ConteinerVideo  = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 2;
    align-items: center;

    @media (max-width: 955px) {
       order: 2;
       padding: 2rem;

    }

`;

export const Video = styled.div`
    width: 100%;

    video {
        width: 100%;
    }

    @media (max-width: 955px) {
       margin-bottom: 3rem;
        width: 46%;
    }

    @media (max-width: 721px) {
       margin-bottom: 3rem;
        width: 60%;
    }

    @media (max-width: 491px) {
       margin-bottom: 3rem;
        width: 76%;
    }

    @media (max-width: 395px) {
        margin-bottom: 1rem;
    }

`;

export const ConteinerButtons = styled.div`
    display: flex;
    width: 100%;
    gap: 4rem;
    
    button {
        width: 20rem;
        padding: .5rem;
    }

    @media (max-width: 955px) {
       margin-bottom: 3rem;
       flex-wrap: wrap;
       align-items: center;
       justify-content: center;
       gap: 1.6rem;

       button {
        width: 14rem;
        padding: .1rem;
       }
    }

    @media (max-width: 395px) {
        button {
            width: 12rem;
        }
    }
`;

export const ConteinerTexts = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 955px) {
       order: 1;

       h1 {
            margin-bottom: 2rem;
       }

       p {
            margin-bottom: 2rem

       }
    }

    @media (max-width: 369px) {
        h1 {
            &.titulo {
                font-size: 1.6rem;
            }
        }

        p {
            &.text {
                font-size: 1.2rem;
            }
        }
    }

   

    h1 {
        font-size: 3.7rem;
        display: flex;
        justify-content: space-between;
        align-items: center;


        span {
            color: ${props => props.theme.colors.purple_200};


            svg {
                font-size: 4rem;
                transform: rotate(45deg);
                margin-top: 1.4rem;
                cursor: pointer;
            }
        }
    }

    p {
        font-size: 1.6rem;
        color: #828282;
    }
`;

export const ConteinerData = styled.div`

    p {
        color: ${props => props.theme.colors.purple_200};
    }
`;