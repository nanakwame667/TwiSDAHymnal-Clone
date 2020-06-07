import {Ionicons} from '@expo/vector-icons';

import {createStackNavigator} from '@react-navigation/stack';

import  React, { Component }  from 'react';

import WorshipScreen from './../screens/CalltoWorship';

import WorshipData from './WorshipData';
const Stack=createStackNavigator();

export default class WorshipNavigator extends Component{
    render(){
        return(
            <Stack.Navigator mode="modal">
            <Stack.Screen name="Scripture Reading" component={WorshipScreen}
            options={{
                headerStyle:{
                    backgroundColor:'#1664c0'
                },
                headerTintColor:'#FFFAFA',
                headerLeft:()=>(
                    <Ionicons name="md-arrow-back" size={24} color="#FFFAFA" 
                    style={{marginLeft:15}}
                    onPress={()=>{this.props.navigation.goBack()}}
                    />
                ),
                headerRight:()=>(
                    <Ionicons name="ios-search" size={24} color="#FFFAFA" 
                    style={{marginRight:15}}
                    />
                )
            }}
            />
            <Stack.Screen name="Responsive Readings" component={WorshipData}
            options={{
                headerStyle:{
                    backgroundColor:"#1664c0",
                },
                headerTintColor:'#FFFAFA'
            }}
            />
            </Stack.Navigator>
        )
    }
}
