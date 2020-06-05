import {NavigationContainer} from '@react-navigation/native';

import React, { Component } from 'react';

import 'react-native-gesture-handler';

import StackNavigator from './src/navigation/stackNavigator';

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
      <StackNavigator/>
      </NavigationContainer>
    )
  }
}


