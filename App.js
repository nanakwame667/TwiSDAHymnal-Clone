import {NavigationContainer} from '@react-navigation/native';

import React, { Component } from 'react';

import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import DrawerNavigator from './src/navigation/drawerNavigator';
import store from './store/index';
export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
      <NavigationContainer>
      <DrawerNavigator/>
      </NavigationContainer>
      </Provider>
    )
  }
}


