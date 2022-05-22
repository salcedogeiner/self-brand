import styled from 'styled-components'

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    min-height: 25em;
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.colorF2};
`;

export const HeaderAbstract = styled.div`
    display: flex;
    color: ${props => props.theme.colorF1};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 50em;
    h1 {
        font-size: 3em;
        font-weight: 100;
        margin: 0;
    }
    p {
        font-size: 1.5em;
        text-align: justify;
    }
    
`;