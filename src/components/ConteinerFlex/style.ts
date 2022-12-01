import styled from 'styled-components';

export const Conteiner  = styled.section<{ viwport: boolean }>`
    width: 100%;
    height: ${props => props.viwport ? '100vh' : '100%'};
    margin: 0rem auto;
    display: flex;
    flex-direction: column;
`;