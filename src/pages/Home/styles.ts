import styled from 'styled-components/native';
import { RectButton,FlatList } from 'react-native-gesture-handler';
import {PokemonList} from './index';

export const Container = styled.View`
flex: 1;
`; 

export const StoreImage = styled.Image`
width: 56px;
height: 56px;
border-radius: 28px;
`;

export const PokemonFlatList = styled(FlatList as new () => FlatList<PokemonList>)`
 padding: 10px 25px 16px;    
`; 

export const ContainerListInfo = styled(RectButton)`
background: #28262E;
border-radius: 20px;
padding: 20px;
align-items: center;
margin-bottom: 10px;

`;
export const ImageStoreList = styled.Image`
width: 200px;
height: 200px;
border-radius: 20px;

   
`;
 
export const TextoInfo = styled.Text`
color: #999591;
font-family: 'RobotoSlab-Medium';
font-size: 18px;
 
`;
export const ContainerInput = styled.View`
    padding: 18px;
`;

export const  ContainerTextName = styled.View`
    flex-direction: row;
    padding: 10px;
`;


export const ContainerTextType = styled.View`
    flex-direction: row;
    padding: 10px;
`;
export const  TextLabel = styled.Text`
color: #f4ede8;
font-family: 'RobotoSlab-Regular';
font-size: 20px;
margin-top: 10px;
 `;


export const TextType = styled.Text`
 
`;
export const  TextName = styled.Text`
color: #FF9000;
font-family: 'RobotoSlab-Medium';
font-size: 20px;
margin-top: 10px;
 `;