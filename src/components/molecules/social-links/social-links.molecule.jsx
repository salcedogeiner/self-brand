import React from 'react';
import IconLink from '../../atoms/icon-link.atom';
import {faGithub, faFacebook, faLinkedin, faYoutube, faInstagram, faTwitter, faReddit, faGoogle} from '@fortawesome/free-brands-svg-icons'
import {List} from './list.styled';

const SocialLinks = ({ links }) => {
    const icons = {
        github: faGithub,
        facebook: faFacebook,
        linkedin: faLinkedin,
        youtube: faYoutube,
        instagram: faInstagram,
        twitter: faTwitter,
        reddit: faReddit,
        google: faGoogle
    }

    return (
        <List>
            {links.map((link, index) =>  ( link.icon ?
                    <li key={index}>
                        <IconLink link={link.src} icon={icons[link.icon]}></IconLink>
                    </li>
                    : null
                )
            )}
        </List>
    );
}

export default SocialLinks;
