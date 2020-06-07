import { Ionicons } from '@expo/vector-icons';

import {createStackNavigator} from '@react-navigation/stack';

import  React, { Component }  from 'react';

import FavoritesScreen from './../screens/favorites';
const Stack=createStackNavigator();

export default class favoriteNavigator extends Component{
    render(){
        return(
            <Stack.Navigator mode="modal">
            <Stack.Screen name="Favorites" component={FavoritesScreen}
            options={{
                headerStyle:{
                    backgroundColor:'#1664c0'
                },
                headerTintColor:'#FFFAFA',
                headerLeft:()=>(
                    <Ionicons name="md-arrow-back" size={24} color="#FFFAFA" 
                    style={{marginLeft:15}}
                    onPress={()=>{this.props.navigation.navigate('Hymns')}}
                    />
                ),
                headerRight:()=>(
                    <Ionicons name="ios-search" size={24} color="#FFFAFA" 
                    style={{marginRight:15}}
                    />
                )
            }}
            />
            </Stack.Navigator>
        )
    }
}
