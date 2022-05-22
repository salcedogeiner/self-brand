import React, { useState, useEffect } from 'react'
import { Header, HeaderAbstract, SocialZone } from './header.styled'
import AvatarPerfil from '../../organisms/avatar-perfil/avatar-perfil.organism'
import SocialLinks from '../../molecules/social-links/social-links.molecule'
import PdfViewer from '../../organisms/pdf-viewer/pdf-viewer.organism'

const BrandHeader = () => {
    return (
        <Header>
            <AvatarPerfil src={'https://s.gravatar.com/avatar/ed6459dfaa7fd5177b9851d104925442?s=380'}></AvatarPerfil>
            <HeaderAbstract>
                <h1>Alexis Salcedo</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vestibulum libero metus, tempus non lorem commodo, 
                    ornare iaculis dui. Fusce sit amet semper lacus, a tincidunt 
                    diam. Vivamus neque turpis, rutrum sed semper gravida, 
                    pretium vitae justo. Fusce turpis dolor, tempus ac ullamcorper 
                    ac, laoreet ac magna. Nullam in tempus lorem. Proin vehicula 
                    est lacus, vitae semper sapien vulputate sit amet. Quisque 
                    posuere tincidunt ullamcorper
                </p>
            </HeaderAbstract>
            <SocialZone>
                <SocialLinks links={[{src:'local', icon:'github'}, {src:'otro', icon:'instagram'},{src:'dwq', icon:'google'},{src:'',icon:'twitter'},{src:'', icon:'facebook'}, {src:'', icon:'youtube'}]}></SocialLinks>
                <PdfViewer src={'https://www.um.es/docencia/barzana/DAWEB/Lenguaje-de-programacion-JavaScript-1.pdf'}></PdfViewer>
            </SocialZone>
            
        </Header>
    )
}

export default BrandHeader;
