import React, { Component } from 'react';
import {View,Text,FlatList,TouchableOpacity} from 'react-native';

import { DATA } from './../../DATA';



 export default class HymnsScreen extends Component{
       
    render(){
        return(
          
            <View>
            <FlatList
            data={DATA}
            renderItem={({item}) =>(
                <View>
      <TouchableOpacity style={{flexDirection:'row',marginLeft:10,marginTop:10,marginBottom:10,width:350,height:'auto'}} 
      onPress={()=>this.props.navigation.navigate('HymnsDataScreen',{id:item.id,title:item.title,data:item.data,data1:item.data1})}>
      <Text style={{marginRight:15,fontSize:22}}>{item.id}</Text>
        <Text style={{fontSize:22,marginRight:30}}>{item.title}</Text>
        </TouchableOpacity>
      </View>
            )}
            keyExtractor={item => item.id}
          />
            </View>
            )
         
        
    }
}