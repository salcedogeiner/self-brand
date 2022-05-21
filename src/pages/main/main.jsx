import React from 'react';
import IconLink from '../../components/atoms/icon-link.atom.jsx';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import BrandHeader from '../../components/templates/brand-header';

export const Main = ({props}) => {
    return (
        <div>
            <BrandHeader></BrandHeader>
            <IconLink link={'http://localhost'} icon={faGithub}></IconLink>
        </div>
    );
}
