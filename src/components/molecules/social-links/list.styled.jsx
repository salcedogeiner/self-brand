import styled from 'styled-components'

const List = styled.ul`
    padding: 0;
    li {
        display: block;
        font-size: 2em;
        a {
            color: ${props => props.theme.colorF1};
        }
    }
    
`;

export { List };
