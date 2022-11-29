import styled from 'styled-components';

export const Conteiner  = styled.div<{ project: boolean }>`
    margin: ${props => props.project ? '0' : '8rem auto'};
    width: 100%;
    padding: 0 3rem;

    @media (max-width: 513px) {
        padding: 0 0rem;
    }
`;

export const ConteinerImgTop = styled.div`
    
`;