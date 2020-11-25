import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native'; 
import  Icon  from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';
import api from '../../service/api';
import {
    ContainerImageName, ImageStoreList, TextName, ContainerInfoWeightHeight,
    TextWight, TextHeight, ContainerLabel, TextLabel, TextStats, ContainerTextStats, Container,
    ContainerInfo, TextInfo, TextLabelInfo, ColorTextInfo,ContainerButtonBack, TextButtonBack
} from './styles';

interface PokemonDetailsRouteParams {
    id: string;
}
export interface PokemonDetails {
    id: string;
    name: string;
    weight: string;
    height: string;
    stats: string[]
}

const Details: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const params = route.params as PokemonDetailsRouteParams;
    const [pokemons, setPokemons] = useState<PokemonDetails>();

    useEffect(() => {
        const stats: string[] = [];
        api.get(`/pokemon/${params.id}`).then(response => {

            response.data.stats.forEach((item: number, index: number) => { 
                stats.push(
                    response.data.stats[index].stat.name,
                    response.data.stats[index].base_stat,
                ) 
            })

            const pokemonDetails: PokemonDetails = {
                id: response.data.id,
                name: response.data.name,
                height: response.data.height,
                weight: response.data.weight,
                stats
            }
            setPokemons(pokemonDetails) 
        })

    }, [])

    return (
        <>
         <Header titleTexto="POKÉMON CHALLENGE" />
         <ContainerButtonBack onPress={() =>  navigation.goBack()}>
             <Icon name="arrow-left"size={24} color="#FF9000" />
             <TextButtonBack>Back</TextButtonBack>
         </ContainerButtonBack>
         <ScrollView>
            <Container>
                <ContainerImageName>

                    <ImageStoreList source={
                        {
                            uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemons?.id}.png`
                        }} />
                    <TextName>{pokemons?.name}</TextName>
                </ContainerImageName>
                <ContainerInfoWeightHeight>
                    <TextWight>{pokemons?.weight} KG</TextWight>
                    <TextHeight>{pokemons?.height} M</TextHeight>

                </ContainerInfoWeightHeight>
                <ContainerLabel>
                    <TextLabel>Weight</TextLabel>
                    <TextLabel>Height</TextLabel>
                </ContainerLabel>
                <ContainerTextStats>
                    <TextStats>Stats</TextStats>
                </ContainerTextStats>
                <ContainerInfo>

                    <TextLabelInfo> {pokemons?.stats[0].toLocaleUpperCase()}</TextLabelInfo>
                    <ColorTextInfo>
                        <TextInfo> {pokemons?.stats[1]}</TextInfo>
                    </ColorTextInfo>

                </ContainerInfo>
                <ContainerInfo>

                    <TextLabelInfo>ATK</TextLabelInfo>
                    <ColorTextInfo>
                        <TextInfo> {pokemons?.stats[3]}</TextInfo>
                    </ColorTextInfo>

                </ContainerInfo>
                <ContainerInfo>

                    <TextLabelInfo>DEF</TextLabelInfo>
                    <ColorTextInfo>
                        <TextInfo> {pokemons?.stats[5]}</TextInfo>
                    </ColorTextInfo>

                </ContainerInfo>
                <ContainerInfo>

                    <TextLabelInfo>SPD</TextLabelInfo>
                    <ColorTextInfo>
                        <TextInfo> {pokemons?.stats[11]}</TextInfo>
                    </ColorTextInfo>

                </ContainerInfo>
            </Container>
            </ScrollView>
        </>
    );
}
export default Details;