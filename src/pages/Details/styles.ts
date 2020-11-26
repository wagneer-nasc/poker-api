import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;           
`;

export const ContainerImageName = styled.View`
    align-items: center; 
    padding: 50px;    
`;

export const ImagePokemonList = styled.Image`
  width: 200px;
  height: 200px; 
 `;

export const TextName = styled.Text`
  color: #FF9000;
  font-family: 'RobotoSlab-Regular';
  font-size: 28px;
  margin-top: 20px;  
`;

export const ContainerInfoWeightHeight = styled.View`     
flex-direction: row;
justify-content: space-between;
align-items: center;
 padding: 0 65px;  
         
 `;
export const TextWight = styled.Text`
 color: #f4ede8;
 font-family: 'RobotoSlab-Regular';
 font-size: 28px; 
 
  `;
export const TextHeight = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
  font-size: 28px; 
   `;

export const ContainerLabel = styled.View`
    flex-direction: row; 
    justify-content: space-between;
    padding: 0 75px;  
    
 `;
export const TextLabel = styled.Text`
   font-family: 'RobotoSlab-Regular';
   font-size: 16px; 
   color: #666360;
   
 `;
export const ContainerTextStats = styled.View`
    align-items: center;
    padding: 20px;   
 
`;
export const TextStats = styled.Text`
 font-family: 'RobotoSlab-Regular';
 font-size: 28px; 
 color: #f4ede8; 
 `;

export const ContainerInfo = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    padding-right: 50px;
    padding-bottom: 10px;     
 `;

export const TextInfo = styled.Text`
     font-family: 'RobotoSlab-Medium';
     color: #f4ede8;
     font-size: 20px;   
 `;

export const TextLabelInfo = styled.Text`
    color: #f4ede8;
    font-family: 'RobotoSlab-Medium';
    font-size: 22px; 
    padding-right: 20px;
  `;

export const ColorTextInfo = styled.View`
    align-items: center;
    background: #FF9000 ;
    width: 200px;
    border-radius: 20px; 
     
  `;
export const ContainerButtonBack = styled(RectButton)`
    flex-direction: row;
    padding: 20px;
  `;

export const TextButtonBack = styled.Text`
   padding: 0 10px;
   color: #FF9000;
   font-size: 20px; 
   font-family: 'RobotoSlab-Medium';     
  `;
export const ContainerIdPokemon = styled.View`
  margin-right: 250px;
`;

export const TextIDPokemon = styled.Text`
font-size: 24px;
color: #666360;
font-family: 'RobotoSlab-Medium';

`;