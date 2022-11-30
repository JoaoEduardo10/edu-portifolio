import styled from 'styled-components';

export const Conteiner  = styled.div<{ project: boolean }>`
    margin-top: 20rem;
    display: ${props => props.project ? 'none' : 'block'};
`;