import styled from 'styled-components'

export const Viewer = styled.div`
    cursor: pointer;
    display: flex;
    font-size: 10em;
    padding: 3rem;
    color: ${props => props.theme.colorF1};
    flex-direction: column;
    span {
        font-size: 1.5rem;
    }
`;

export const PdfContainer = styled.div`
    position: absolute;
    display: flex;
    color: ${props => props.theme.colorF1};
    background-color: ${props => props.theme.colorF5};
    width: 90vw;
    height: 100%;
    left: 10vw;
    top: 0;
    align-items: center;
    box-shadow: -10vw 0px 0px 0px rgb(0 0 0 / 62%);
    iframe {
        border: none;
    }
`

