import styled from 'styled-components';

export const Conteiner  = styled.section<{ project: boolean }>`
    width: 100%;
    margin: 5rem auto;
    display: ${props => props.project ? 'none' : 'flex'};
    flex-direction: column;
`;