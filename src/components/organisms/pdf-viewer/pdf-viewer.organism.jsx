import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArchive, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { Viewer } from './viewer.styled.jsx';
//<iframe src={src} width="100%" height="100%"></iframe>
const PdfViewer = ({src}) => {
    return (
        <Viewer>
            <FontAwesomeIcon icon={faFileAlt} size='5em'></FontAwesomeIcon>
            <span>Curriculum</span>
        </Viewer>
        
    )
}

export default PdfViewer;