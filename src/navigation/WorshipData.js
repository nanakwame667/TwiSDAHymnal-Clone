import { createStackNavigator } from '@react-navigation/stack';

import React, { Component } from 'react';

import WorshipEnglish from '../screens/WorshipEnglish';
const Stack=createStackNavigator();

export default class WorshipData extends Component{
    render(){
        return(
            <Stack.Navigator>
            <Stack.Screen name="WorshipScreen" component={WorshipEnglish} options={
                {headerShown:false}}/>
            </Stack.Navigator>
        )
    }
}