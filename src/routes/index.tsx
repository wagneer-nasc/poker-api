import React from 'react';
import Home from '../pages/Home';
import { createStackNavigator } from '@react-navigation/stack';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
    return (
        <App.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#312E38' }
        }}
        >
            <App.Screen name="Home" component={Home} />
        </App.Navigator>
    );
}
export default AppRoutes;