import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// '@fortawesome/free-regular-svg-icons'
// '@fortawesome/free-solid-svg-icons'
// '@fortawesome/free-brands-svg-icons'

const IconLink = ({ icon, link, size }) => {
    
    return (
        <a href={link} target="_blank">
            <FontAwesomeIcon icon={icon} size={size}></FontAwesomeIcon>
        </a>
    )
}

export default IconLink;
