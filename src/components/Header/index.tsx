import React from 'react';
import {
    Container,
    HeaderContainer,
    TitleTexto
} from './styles';
import pokeImage from '../../assets/poke.png';
import { Image } from 'react-native';

interface HeaderProps {
    titleTexto?: string,

}
const Header: React.FC<HeaderProps> = ({ titleTexto }) => {

    return (

        <Container>
            <HeaderContainer>
                <Image source={pokeImage}></Image>
                <TitleTexto>{titleTexto}</TitleTexto>
            </HeaderContainer>
        </Container>

    )
}
export default Header;