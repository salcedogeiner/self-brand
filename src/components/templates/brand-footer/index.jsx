import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

import { Footer } from './footer.styled';

const BrandFooter = () => {
    return (
        <Footer>
            <p>
                <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>
                {' by alexiSSalcedo' }
            </p>
        </Footer>
    )
};

export default BrandFooter;
