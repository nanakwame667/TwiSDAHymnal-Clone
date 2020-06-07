import React, { Component} from 'react'
import {View,Text,Image,Linking} from 'react-native';


export default class AboutScreen extends Component{
    
    render(){
        return(
            <View style={{flex:1}}>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:100}}>
            <Image
            source={require('../../assets/hymn.png')}
            style={{height:80,width:80}}
            />
            <Text style={{color:'#1664c0',fontWeight:'bold',fontSize:16,marginTop:25}}>Twi SDA Hymnal App</Text>
            <Text style={{color:'#1664c0',fontWeight:'bold',fontSize:14,marginTop:15}}>Version 3.5.10</Text>
            <Text style={{fontSize:16,fontStyle:'italic'}}>Developed by SankofaTech</Text>
            <Image
            source={require('../../assets/sankofa.png')}
            style={{height:50,width:430}}
            />
            <View style={{flexDirection:'row',marginTop:40}}>
            <Image
            source={require('../../assets/gmail.png')}
            style={{height:40,width:40,marginHorizontal:25}}
            onPress={()=>{Linking.openURL(URL="mailto:brownjay1997@gmail.com")}}
            />
            <Image
            source={require('../../assets/facebook.png')}
            style={{height:40,width:40}}/>
            </View>
            </View>
            </View>
        )
    }
}