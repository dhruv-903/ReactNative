import React from 'react'

import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import CityWeather from '../screens/CityWeather'
import Feather from 'react-native-vector-icons/Feather'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Current"
            screenOptions={{ tabBarActiveBackgroundColor: 'black' }} >
            <Tab.Screen
                name='Current'
                component={CurrentWeather}
                options={{ tabBarIcon: ({ focused }) => <Feather name='droplet' size={25} color={focused ? 'tomato' : 'black'} />, tabBarLabel:'' }} />

            <Tab.Screen
                name='UpComing'
                component={UpcomingWeather}
                options={{ tabBarIcon: ({ focused }) => <Feather name='clock' size={25} color={focused ? 'tomato' : 'black'} />, tabBarLabel:'' }} />

            <Tab.Screen
                name='City'
                component={CityWeather}
                options={{ tabBarIcon: ({ focused }) => <Feather name='home' size={25} color={focused ? 'tomato' : 'black'} /> , tabBarLabel:''}} />
        </Tab.Navigator>
    )
}

export default Navigation
