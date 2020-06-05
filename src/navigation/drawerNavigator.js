import React, { Component } from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Exit from './../components/Exit';
import Share from './../components/share';
import AboutScreen from './../screens/AboutUs';
import WorshipScreen from './../screens/CalltoWorship';
import HymnsScreen from './../screens/Hymns';
import FavoritesScreen from './../screens/favorites';
const Drawer=createDrawerNavigator();

export default class DrawerNavigator extends Component{
    render(){
        return(
            <Drawer.Navigator>
            <Drawer.Screen name="Hymns" component={HymnsScreen}/>
            <Drawer.Screen name="Call to Worship" component={WorshipScreen}/>
            <Drawer.Screen name="Favorites" component={FavoritesScreen}/>
            <Drawer.Screen name="Share" component={Share}/>
            <Drawer.Screen name="About Us" component={AboutScreen}/>
            <Drawer.Screen name="Exit" component={Exit}/>
            </Drawer.Navigator>
        )
    }
}