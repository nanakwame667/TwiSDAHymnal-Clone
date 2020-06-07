import React, { Component } from 'react';

import {View,Text} from 'react-native';

export default class WorshipEnglish extends Component{
    render(){
        const {id,title,data} = this.props.route.params;
        return(
            <View>
            <Text>{id}</Text>
            <Text>{title}</Text>
            <Text>{data}</Text>
            </View>
        )
    }
}