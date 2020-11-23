import React from 'react'; 
import Header from '../../components/Header';
import Input from '../../components/Input';
import { Container, ContainerInput } from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <Header titleTexto="POKÉMON CHALLENGE" />
            <ContainerInput>
                <Input
                    placeholder="Type the Pokémon name"
                    name="search"
                    icon="search"
                ></Input>
            </ContainerInput>

        </Container>

    );

}
export default Home;