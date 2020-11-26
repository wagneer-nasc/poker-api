import React, { useCallback, useEffect, useRef, useState } from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import {
    Container,
    PokemonFlatList,
    ContainerListInfo,
    ImageStoreList,
    TextName,
    TextLabel,
    ContainerInput,
    ContainerTextName,
    ContainerTextType,
    ContainerButtonNextPrevious,
    ButtonNext,
    ButtonPrevious,

} from './styles';
import api from '../../service/api';
import Axios from 'axios';
import { Alert, Text, TextInputProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';


interface Pokemon {
    count: number;
    next: string;
    previous: string,
    results: [{
        name: string;
        url: string;
    }]

}

export interface PokemonList {
    id: string;
    name: string;
    types: string[]
}


const Home: React.FC = () => {
    const navigation = useNavigation();
    const [next, setNext] = useState<string>('');
    const [previous, setPrevious] = useState<string>('');
    const [pokemons, setPokemons] = useState<PokemonList[]>([]);
    const [namePokemon, setNamePokemon] = useState<string>('');
    const [urlPokemonData, setUrlPokemonData] = useState<string>('pokemon?offset=10&limit=10'); 
    const pokemonData: PokemonList[] = ([]);


    useEffect(() => {
        if (!namePokemon) {
            loadPokemon(urlPokemonData);
        }
    }, [namePokemon]);

    async function nextPokemon() {
        if (next) loadPokemon(next);

    }
    async function previousPokemon() {
        if (previous) loadPokemon(previous);
    }

    async function loadPokemon(url: string) {
        await api.get<Pokemon>(`${url}`).then(response => {
            setNext(response.data.next);
            setPrevious(response.data.previous);

            response.data.results.map((item) => {
                loadDataPokemon(item.url)
            })
        })

    }

    async function loadDataPokemon(url: string) {
        const types: string[] = [];

        await Axios.get(`${url}`).then(response => {
            response.data.types.forEach((item: number, index: number) => {
                types.push(response.data.types[index].type.name);
            })
            const data: PokemonList = {
                id: response.data.id,
                name: response.data.name,
                types,
            }
            pokemonData.push(data);

        })
        setPokemons(pokemonData)

    }

    async function searchPokemon() {
        if (namePokemon) {
            await api.get(`/pokemon/${namePokemon.toLowerCase()}`).then(response => {
                const types: string[] = [];
                response.data.types.forEach((item: number, index: number) => {
                    types.push(response.data.types[index].type.name);
                })
                const data: PokemonList = {
                    id: response.data.id,
                    name: response.data.name,
                    types,
                }
                setPokemons([data]);

            }).catch(function (err) {
                Alert.alert('Pokemon não encontrado')
            })
        }

    }
    function openDetails(id: string) {
        navigation.navigate('Details', { id });
    }

    return (
        <Container>
            <Header titleTexto="POKÉMON CHALLENGE" />
            <ContainerInput>
                <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    returnKeyType="send"
                    onSubmitEditing={() => {
                        searchPokemon();
                    }}
                    enablesReturnKeyAutomatically={true}
                    value={namePokemon}
                    onChangeText={setNamePokemon}  
                    placeholder="Type the Pokémon name"
                    name="search"
                    icon="search"
                ></Input>
            </ContainerInput>
            {pokemons !== null && (
                <PokemonFlatList
                    data={pokemons}
                    keyExtractor={(pokemon: PokemonList) => pokemon.id.toString()}
                    renderItem={({ item }: { item: PokemonList }) => (
                        <>
                            <ContainerListInfo onPress={() => { openDetails(item.id) }}>
                                <ImageStoreList source={
                                    {
                                        uri: `https://pokeres.bastionbot.org/images/pokemon/${item.id}.png`
                                    }} />
                                <ContainerTextName>
                                    <TextLabel> Name: </TextLabel>
                                    <TextName>{item.name}</TextName>
                                </ContainerTextName>
                                <ContainerTextType>
                                    <TextLabel>Types: </TextLabel>
                                    <TextName> {item.types[0]}</TextName>
                                    <TextName> , {item.types[1]}</TextName>
                                </ContainerTextType>
                            </ContainerListInfo>
                        </>
                    )}
                />
            )}
            <>
                <ContainerButtonNextPrevious>
                    <ButtonPrevious onPress={() => { previousPokemon() }}>
                        <Icon name="chevron-left" size={25} color="#FF9000" />
                    </ButtonPrevious>
                    <ButtonNext onPress={() => { nextPokemon() }}>
                        <Icon name="chevron-right" size={25} color="#FF9000" />
                    </ButtonNext>

                </ContainerButtonNextPrevious>
            </>
        </Container>

    );

}
export default Home;