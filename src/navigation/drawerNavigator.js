import React, { Component } from 'react'
import {Ionicons} from '@expo/vector-icons';

import {createDrawerNavigator} from '@react-navigation/drawer';

import Exit from './../components/Exit';
import Share from './../components/share';
import AboutScreen from './../screens/AboutUs';
import DrawerContent from './../screens/DrawerContent';


import HymnsNavigator from './HymnsNavigator';
import WorshipNavigator from './WorshipNavigator';
import favoriteNavigator from './favoriteNavigator';
const Drawer=createDrawerNavigator();

export default class DrawerNavigator extends Component{
    render(){
        return(
            
            <Drawer.Navigator
            drawerContent={props=> <DrawerContent {...props}/>}
            >
            <Drawer.Screen name="Hymns" component={HymnsNavigator}/>
            <Drawer.Screen name="Call to Worship" component={WorshipNavigator}/>
            <Drawer.Screen name="Favorites" component={favoriteNavigator}/>
            <Drawer.Screen name="Share" component={Share}/>
            <Drawer.Screen name="About Us" component={AboutScreen}/>
            <Drawer.Screen name="Exit" component={Exit}/>
            </Drawer.Navigator>
            
        )
    }
}

