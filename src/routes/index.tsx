import React from 'react';
import Home from '../pages/Home';
import Details from '../pages/Details';

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
            <App.Screen name="Details" component={Details} />
        </App.Navigator>
    );
}
export default AppRoutes;