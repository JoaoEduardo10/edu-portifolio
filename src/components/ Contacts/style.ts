import styled from 'styled-components';

export const Conteiner  = styled.div`
   margin-top: 13rem;
   margin-bottom: 17rem;
`;

export const ConteinerContacts = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin-top: 3rem;
    padding: 2rem;
`;

export const Contact = styled.li`
    &:hover {
        transform: scale(1.2);
    }

    a{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        

        div.icons {
            background-color: #212121;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 3rem;    
            padding: 2rem;
            border-radius: 50%;

            svg {
                color: ${props => props.theme.colors.purple_200};
            }
        }

        p {
            font-size: 1.8rem;
            color: #fff;
            font-family: ${props => props.theme.fonts.poppins};

            &.white {
                color: #fff;
            }
            &.black {
                color: #000;
            }
        }

        span {
            color: #828282;
            font-size: 1.6rem;
        }
    }
`;