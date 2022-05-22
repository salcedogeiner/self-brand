import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { Viewer, PdfContainer } from './viewer.styled.jsx';
import VerticalExpander from '../../molecules/vertical-expander/vertical-expander.molecule.jsx';
//<iframe src={src} width="100%" height="100%"></iframe>
const PdfViewer = ({src}) => {

    const [isOpen, setIsOpen] = useState(false);

    const open = () => {
        console.log('clic');
        setIsOpen(!isOpen);
    }

    return (
        <Viewer>
            <FontAwesomeIcon icon={faFileAlt} onClick={open}></FontAwesomeIcon>
            <span>Curriculum</span>
            { isOpen ?
            <PdfContainer>
                <VerticalExpander onClick={open}></VerticalExpander>
                <iframe src={src} width="100%" height="100%"></iframe>
            </PdfContainer> : null}
        </Viewer>
        
    )
}

export default PdfViewer;