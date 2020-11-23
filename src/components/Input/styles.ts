import styled from 'styled-components/native';
import  FeatherIcon  from 'react-native-vector-icons/Feather';

export const Container = styled.View`
    width: 100%;
    height: 60px;
    border-radius: 13px;
    background: #28262E;
    padding: 0 16px;
    justify-content: center;
    margin-bottom: 8px;  

    flex-direction: row;
    align-items: center; 
`;
export const TextInput = styled.TextInput`
    flex: 1;
    color: #f4ede8;
    font-size: 16px;
    font-family: 'RobotoSlab-Regular';
`;
export const Icon = styled(FeatherIcon)`
    margin-right: 16px;
`;