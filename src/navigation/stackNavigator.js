import {createStackNavigator} from '@react-navigation/stack';

import React, { Component } from 'react';

import DrawerNavigator from './drawerNavigator';
const Stack=createStackNavigator();

export default class StackNavigator extends Component{
    render(){
        return(
            <Stack.Navigator>
            <Stack.Screen name="Twi SDA Hymnal" component={DrawerNavigator}/>
            </Stack.Navigator>
        )
    }
}