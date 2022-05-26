import styled from 'styled-components'

const Avatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colorF3};
    height: calc(15em + 4vw);
    width: calc(15em + 4vw);
    border-radius: 0 10em 10em 0;
    @media (max-width: ${props => props.theme.device?.tablet}) {
        width: 100vw;
        border-radius: 0;
    }
`;

const AvatarImage = styled.div`
    width: 14em;
    height: 14em;
    background: ${props => props.theme.colorF4} url(${props => props.src}) no-repeat;
    background-size: cover;
    border-radius: 10em;
`;

export { Avatar, AvatarImage };
