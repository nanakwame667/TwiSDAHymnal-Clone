import {Ionicons} from  '@expo/vector-icons';

import {createStackNavigator} from '@react-navigation/stack';
import {useIsDrawerOpen} from '@react-navigation/drawer';

import React, { Component } from 'react';

import {TouchableOpacity,View,TextInput,Text} from 'react-native';

import * as Animatable from 'react-native-animatable';

import HymnsScreen from '../screens/Hymns';

import HymnsDataScreen from './../index';


const Stack=createStackNavigator();

export default class HymnsNavigator extends Component{
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
          content: false, 
        };
      }
      onClick=()=> {
        this.setState(previousState => ({ content: !previousState.content }))
      }
    render(){
        const {navigate}= this.props.navigation;
        return(
            <Stack.Navigator>
            <Stack.Screen name="Twi SDA Hymnal" component={HymnsScreen} options={{
                headerLeft:()=>(
                    <Ionicons name="ios-menu" size={30} color="#FFF" 
                    onPress={()=>this.props.navigation.openDrawer()}
                    style={{marginLeft:15}}
                    />
                ),
                headerRight:()=>(
                    <View>
                        <TouchableOpacity onPress={()=>this.onClick}>
                        <Ionicons name="ios-search" size={24} color="#FFF" 
                        style={{marginRight:15}}/>
                        </TouchableOpacity>
                       
                        { this.state.content && <Animatable.View animation="slideInRight" duration={500} style={{justifyContent:'center',flexDirection:'row'}}>
                                <Ionicons name="ios-search" size={24} color="#FFF"/>
                                <TextInput placeholder="Hymn number or title"/>
                                <Ionicons name="ios-close" size={24} color="#FFF"/>
                            </Animatable.View>
                        }
                    </View>
                ),
                
                headerStyle:{
                    backgroundColor:"#1664c0",
                },
                headerTintColor:'#FFF'
            }} />
            <Stack.Screen name="HymnsDataScreen" component={HymnsDataScreen}
            options={({navigation,route})=>({
                headerTitle:null,
                headerStyle:{
                    backgroundColor:"#1664c0",
                },
                headerTintColor:'#FFF'
            })}
            />
            </Stack.Navigator>
        )
    }
}