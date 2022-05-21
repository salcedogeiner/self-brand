import React, { useState, useEffect } from 'react'
import { Header } from './header.styled'
import AvatarPerfil from '../../organisms/avatar-perfil/avatar-perfil.organism'

const BrandHeader = () => {
    return (
        <Header>
            <AvatarPerfil src={'https://s.gravatar.com/avatar/ed6459dfaa7fd5177b9851d104925442?s=380'}></AvatarPerfil>
        </Header>
    )
}

export default BrandHeader;
