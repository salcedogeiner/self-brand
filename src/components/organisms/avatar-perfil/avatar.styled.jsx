import styled from 'styled-components'

export const Avatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colorF3};
    height: 19em;
    width: 22em;
    border-radius: 0 10em 10em 0;
`;

export const AvatarImage = styled.div`
    width: 14em;
    height: 14em;
    background: ${props => props.theme.colorF4} url(${props => props.src}) round;
    border-radius: 10em;
`;