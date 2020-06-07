import { Ionicons } from '@expo/vector-icons';

import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';

import React, { Component } from 'react';

import {View,Text,StyleSheet,Image,Share} from 'react-native';

import RNExitApp from 'react-native-exit-app';


export default class DrawerContent extends Component{
    constructor(props){
        super(props)
        this._shareMessage =this._shareMessage.bind(this);
    }
    _shareMessage(){
        Share.share({
            message:'Hello,Get the new Twi SDA hymnal at https://play.google.com/store/apps/details?id=com.TwiSDAHymn.twi_hymn'
            
        })
    }
    render(){
    return (
        <View>
        <View style={{height:180,backgroundColor:'#1664c0',justifyContent:'center',alignItems:'center',marginBottom:5}}>
        <Image
        source={require('../../assets/hymn.png')}
        style={{height:100,width:100}}
        />
        <Text style={{fontSize:18,color:'#FFFAFA'}}>Yonko Do</Text>
        </View>
        <DrawerItem
        icon={()=>(
            <Ionicons name="md-bookmarks" size={24} color="black" />
        )}
        label="Hymns"
        onPress={()=>{this.props.navigation.navigate('Twi SDA Hymnal')}}
        />
        <DrawerItem
        icon={()=>(
            <Ionicons name="ios-notifications" size={24} color="green" />
        )}
        label="Call to worship"
        onPress={()=>{this.props.navigation.navigate('Call to Worship')}}
        />
        <DrawerItem
        icon={()=>(
            <Ionicons name="ios-heart" size={24} color="red" />
        )}
        label="Favorites"
        onPress={()=>{this.props.navigation.navigate('Favorites')}}
        />
        <DrawerItem
        icon={()=>(
            <Ionicons name="md-share" size={24} color="violet" />
        )}
        label="Share"
        onPress={this._shareMessage}
        />
        <DrawerItem
        icon={()=>(
            <Ionicons name="md-people" size={24} color="black" />
        )}
        label="About Us"
        onPress={()=>{this.props.navigation.navigate('About Us')}}
        />
        <DrawerItem
        icon={()=>(
            <Ionicons name="md-exit" size={24} color="#FF6347" />
        )}
        label="Exit"
        
        />
        </View>   
    )
}
}