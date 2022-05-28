import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.colorF6};
    font-size: ${props => props.theme.fontSize};
`;
