import styled from 'styled-components'

const HeaderAbstract = styled.div`
    display: flex;
    color: ${props => props.theme.colorF1};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    h1 {
        font-size: 3em;
        font-weight: 100;
        margin: 0px;
    }
    p {
        font-size: 1.5em;
        text-align: justify;
        padding: 0 2em;
    }
    @media (max-width:  ${props => props.theme.device?.mobileL}) {
        min-width: 100vw;
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
    box-shadow: 1px 0px 7px 5px rgba(0,0,0,0.48);
    @media (max-width:  ${props => props.theme.device?.tablet}) {
        justify-content: space-around;
    }
    @media (max-width:  ${props => props.theme.device?.laptop}) {
        font-size: 10px;
    }
`;

const SocialZone = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media (max-width:  ${props => props.theme.device?.laptop}) {
        font-size: 10px;
    }
`;

export { Header, HeaderAbstract, SocialZone };
