import styled from 'styled-components'

const HeaderAbstract = styled.div`
    display: flex;
    color: ${props => props.theme.colorF1};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 50em;
    h1 {
        font-size: 3em;
        font-weight: 100;
        margin: 0px;
    }
    p {
        font-size: 1.5em;
        text-align: justify;
    }
`;

const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    min-height: 25em;
    padding: 0px;
    margin: 0px;
    background-color: ${props => props.theme.colorF2};
`;

const SocialZone = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export { Header, HeaderAbstract, SocialZone };
