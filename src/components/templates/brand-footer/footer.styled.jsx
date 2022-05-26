import styled from 'styled-components';

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    background-color: ${props => props.theme.colorF5};
    color: ${props => props.theme.colorF1};
`;

export { Footer };
