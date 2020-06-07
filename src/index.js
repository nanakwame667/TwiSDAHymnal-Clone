import React, { Component,useLayoutEffect,useState } from 'react';

import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';


import { Ionicons } from '@expo/vector-icons';

export default function HymnsDataScreen ({navigation,route}){
    const [show,setShow]=useState(false);
    const [show1,setShow1]=useState(true);
    const [show2,setShow2]=useState('#FFF');
    const [icon,setIcon]=useState('ios-star-outline');
    
    
        useLayoutEffect(()=>{
            navigation.setOptions({
                headerRight:()=>(
                    <View style={{flexDirection:'row',marginRight:15}}>
                    <TouchableOpacity style={{marginRight:25}}
                    onPress={()=>{
                        setIcon('ios-star');
                        setShow2("#FF6347")
                    }}
                    >
                    
                    <Ionicons name={icon} size={30} color={show2} />
                
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight:20}}
                    onPress={()=>{
                        setShow(false)
                        setShow1({show1})
                    }}
                    >
                    <Text style={{color:'#FFF'}}>TWI</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight:20}}
                    onPress={()=>{
                        setShow1(false)
                        setShow({show:!show})
                    }}
                    >
                    <Text style={{color:'#FFF'}}>ENGLISH</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={{color:'#FFF'}}>SCORE</Text>
                    </TouchableOpacity>
                    </View>
            )
            },[navigation]);
        })
    const {id,title,data,data1}=route.params;
    return(
        <ScrollView>
        <View 
        style={{
            flexDirection:'row',justifyContent:'center',alignItems:'center',
            borderBottomWidth:1,marginHorizontal:15,borderBottomColor:'#1664c0',
            height:'auto',width:'auto',paddingTop:15,paddingBottom:15
        }}>
        <Text style={{marginRight:10,fontSize:26,fontWeight:'bold'}}>{id}</Text>
        <Text style={{fontSize:26,fontWeight:'bold',width:'auto'}}>{title}</Text>
        </View>
        {
            show?<View 
            style={{
                marginLeft:12,width:390,height:'auto' ,
                marginRight:10,marginTop:15
            }}>
            <Text style={{fontSize:24,margin:10}}>{data}</Text>
            </View>:null
        }
        {
            show1?<View 
            style={{
                marginLeft:12,width:390,height:'auto' ,
                marginRight:10,marginTop:15
            }}>
            <Text style={{fontSize:24,margin:10}}>{data1}</Text>
            </View>:null
        }
        </ScrollView>
    )
    }
