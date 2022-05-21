import React, { useState, useEffect } from 'react'
import { Header } from './header.styled'
import AvatarPerfil from '../../organisms/avatar-perfil/avatar-perfil.organism'

const BrandHeader = () => {
    return (
        <Header>
            <AvatarPerfil src={'https://avatars2.githubusercontent.com/u/30897010?s=460&v=4'}></AvatarPerfil>
        </Header>
    )
}

export default BrandHeader;
