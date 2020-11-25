import React, { useEffect, useState } from 'react';
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

} from './styles';
import api from '../../service/api';
import Axios from 'axios';
import { Alert } from 'react-native';


interface Pokemon {
    count: number;
    next: string;
    previous: string,
    results: [{
        name: string;
        url: string;
    }]

}
interface PokemonData {
    name: string;
    url: string;
}
export interface PokemonList {
    id: string;
    name: string;
    types: string[]
}


const Home: React.FC = () => {
    const [next, setNext] = useState<string>();
    const [previous, setPrevious] = useState<string>();
    const [pokemon, setPokemon] = useState<PokemonData[]>([]);
    const [pokemons, setPokemons] = useState<PokemonList[]>([]);
    const [namePokemon, setNamePokemon] = useState<string>('');
    const pokemonData: PokemonList[] = ([]);


    useEffect(() => {
        async function loadPokemon() {

            await api.get<Pokemon>(`pokemon?limit=5`).then(response => {
                setNext(response.data.next);
                setPrevious(response.data.previous);
                setPokemon(response.data.results);

                pokemon.forEach((item) => {
                    loadDataPokemon(item.url);
                })
            })
        }

        loadPokemon();

    }, []);

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

        }).catch(function (err) {
            console.log(err)
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
        console.log(id)
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
                    value={namePokemon}
                    onChangeText={setNamePokemon}
                    placeholder="Type the Pokémon name"
                    name="search"
                    icon="search"
                ></Input>
            </ContainerInput>
            <PokemonFlatList
                data={pokemons}
                keyExtractor={(pokemon: PokemonList) => pokemon.id.toString()}
                renderItem={({ item }: { item: PokemonList }) => (
                    <>
                        <ContainerListInfo onPress={() => {openDetails(item.id)}}>
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
        </Container>

    );

}
export default Home;