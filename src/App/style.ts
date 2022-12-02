import styled from 'styled-components';

export const Conteiner  = styled.div<{ project: boolean, background: boolean }>`
    margin-top: ${props => props.project ? '0' : '8rem'};
    width: 100%;
    padding: 0 3rem;
    transition: all 300ms ease;
    border: 1px solid ${props => props.background ? '#cccc' : '#13131F'};

    &.showColor {
        background-color: ${props => props.background ? '#13131F' : '#fff'};
    }


    @media (max-width: 513px) {
        padding: 0 0rem;
    }

`;

export const ConteinerImgTop = styled.div`
    
`;