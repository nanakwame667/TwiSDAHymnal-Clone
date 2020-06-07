import React, { Component } from 'react'
import {View,Text,FlatList,TouchableOpacity} from 'react-native';

import { WDATA } from './../../WDATA';



export default class WorshipScreen extends Component{
    render(){
        return(
            <View>
            <FlatList
            data={WDATA}
            renderItem={({ item }) =>(
                <View>
      <TouchableOpacity style={{flexDirection:'row',margin:10}} onPress={()=>this.props.navigation.navigate('Responsive Readings',{screen:'WorshipScreen',params:{id:item.id,title:item.title,data:item.data}})}>
      <Text style={{marginRight:15,fontSize:20}}>{item.id}</Text>
        <Text style={{fontSize:20,marginRight:30}}>{item.title}</Text>
        </TouchableOpacity>
      </View>
            )}
            keyExtractor={item => item.id}
          />
            </View>
        )
    }
}