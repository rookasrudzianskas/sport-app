import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './pages/Main';
import Home from './pages/Home';
import Run from './pages/Run';
import Powerlifting from './pages/Powerlifting';
import PushUps from './pages/PushUps';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Main'
                component={Main}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Run'
                component={Run}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Powerlifting'
                component={Powerlifting}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='PushUps'
                component={PushUps}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    </NavigationContainer>
}