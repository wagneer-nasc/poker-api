import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
   
 `;
export const HeaderContainer = styled.View`
    padding: 24px;
    padding-top: ${getStatusBarHeight() + 24}px;
    background: #28262E;

    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
 

export const TitleTexto = styled.Text`
    padding-left: 40px;
    padding-right: 40px;
    color: #f4ede8;
    font-size: 20px;
    font-family: 'RobotoSlab-Regular';
    
     
`;

