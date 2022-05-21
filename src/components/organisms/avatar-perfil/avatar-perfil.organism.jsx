import React from 'react'
import { Avatar, AvatarImage } from './avatar.styled.jsx'
const AvatarPerfil = ({src}) => {
    return (
        <Avatar>
            <AvatarImage src={src}></AvatarImage>
        </Avatar>
    )
}

export default AvatarPerfil;