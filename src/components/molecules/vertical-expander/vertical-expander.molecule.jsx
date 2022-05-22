import React from 'react';
import { Expander } from './expander.styled.jsx';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VerticalExpander = (props) => {
    return (
        <Expander {...props}>
             <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
        </Expander>
    )
}

export default VerticalExpander;
