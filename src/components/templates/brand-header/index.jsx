import React from 'react';
import { Header, HeaderAbstract, SocialZone } from './header.styled';
import AvatarPerfil from '../../organisms/avatar-perfil/avatar-perfil.organism';
import SocialLinks from '../../molecules/social-links/social-links.molecule';
import PdfViewer from '../../organisms/pdf-viewer/pdf-viewer.organism';
import { useMain } from '../../../pages/main/context';

const BrandHeader = () => {

    const { model } = useMain();
    const data = model.header_data ? model.header_data : {};

    return (
        <Header>
            <AvatarPerfil src={data.photo}></AvatarPerfil>
            <HeaderAbstract>
                <h1>{data.name}</h1>
                <p> {data.abstract}</p>
            </HeaderAbstract>
            <SocialZone>
                <SocialLinks links={data.social_links}></SocialLinks>
                <PdfViewer src={data.curriculum_file}></PdfViewer>
            </SocialZone>
            
        </Header>
    )
}

export default BrandHeader;
